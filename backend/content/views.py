from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from .models import Event, Project, News, Membership, Gallery, Alumni, Contact, SiteSettings, EventRSVP
import json

def home(request):
    events = Event.objects.all()[:3].values('title', 'description', 'date', 'location')
    news = News.objects.all()[:3].values('title', 'content', 'created_at')
    gallery = Gallery.objects.all()[:6].values('title', 'image', 'description')
    return JsonResponse({
        'events': list(events),
        'news': list(news),
        'gallery': list(gallery)
    })

def about(request):
    return JsonResponse({'message': 'About page API endpoint'})

def events(request):
    upcoming_events = Event.objects.filter(status='upcoming').order_by('date').values('title', 'description', 'date', 'location', 'image')
    past_events = Event.objects.filter(status='past').order_by('-date').values('title', 'description', 'date', 'location', 'image')
    return JsonResponse({
        'upcoming_events': list(upcoming_events),
        'past_events': list(past_events)
    })

def projects(request):
    all_projects = Project.objects.all().order_by('-created_at').values('title', 'description', 'category', 'created_at')
    return JsonResponse({'projects': list(all_projects)})

def news(request):
    featured_news = News.objects.filter(is_featured=True).order_by('-created_at')[:1].values('title', 'content', 'image', 'created_at')
    association_news = News.objects.filter(category='news', is_featured=False).order_by('-created_at').values('title', 'content', 'image', 'created_at')
    return JsonResponse({
        'featured_news': list(featured_news),
        'association_news': list(association_news)
    })

def membership(request):
    members = Membership.objects.all().values('name', 'email', 'student_id', 'year_of_study')
    return JsonResponse({'members': list(members)})

def gallery(request):
    featured_gallery = Gallery.objects.filter(is_featured=True).order_by('-uploaded_at')[:3].values('title', 'image', 'description')
    all_gallery = Gallery.objects.all().order_by('-uploaded_at').values('title', 'image', 'description', 'category')
    return JsonResponse({
        'featured_gallery': list(featured_gallery),
        'all_gallery': list(all_gallery)
    })

def alumni(request):
    alumni = Alumni.objects.all().values('name', 'graduation_year', 'current_position', 'company')
    return JsonResponse({'alumni': list(alumni)})

@csrf_exempt
def contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body) if request.content_type == 'application/json' else request.POST
            
            contact = Contact.objects.create(
                name=data.get('name'),
                email=data.get('email'),
                subject=data.get('subject'),
                message=data.get('message')
            )
            
            return JsonResponse({'status': 'success', 'message': 'Contact saved successfully'})
            
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    
    return JsonResponse({'message': 'Contact API endpoint'})

def contact_submit(request):
    return redirect('contact')

def event_rsvp_submit(request):
    if request.method == 'POST':
        try:
            event = Event.objects.get(id=request.POST.get('event_id'))
            EventRSVP.objects.create(
                event=event,
                first_name=request.POST.get('first_name'),
                last_name=request.POST.get('last_name'),
                email=request.POST.get('email'),
                phone=request.POST.get('phone', ''),
                alu_id=request.POST.get('alu_id'),
                dietary_restrictions=request.POST.get('dietary_restrictions', ''),
                additional_guests=int(request.POST.get('additional_guests', 0)),
                comments=request.POST.get('comments', '')
            )
            return render(request, 'events.html', {
                'success_message': 'Thanks for your reservation! We look forward to seeing you at the event.',
                'upcoming_events': Event.objects.filter(status='upcoming').order_by('date'),
                'past_events': Event.objects.filter(status='past').order_by('-date'),
                'event_gallery': Gallery.objects.filter(category='event_gallery').order_by('-uploaded_at'),
            })
        except Exception as e:
            return render(request, 'events.html', {
                'error_message': 'Error submitting RSVP. Please try again.',
                'upcoming_events': Event.objects.filter(status='upcoming').order_by('date'),
                'past_events': Event.objects.filter(status='past').order_by('-date'),
                'event_gallery': Gallery.objects.filter(category='event_gallery').order_by('-uploaded_at'),
            })
    return redirect('events')

def events_api(request):
    events = Event.objects.all().values('id', 'title', 'description', 'date', 'location', 'status', 'image', 'created_at')
    return JsonResponse(list(events), safe=False)

def news_api(request):
    news = News.objects.all().order_by('-created_at').values('id', 'title', 'content', 'category', 'author_name', 'excerpt', 'image', 'is_featured', 'created_at')
    return JsonResponse(list(news), safe=False)

def news_detail_api(request, news_id):
    try:
        news = News.objects.get(id=news_id)
        data = {
            'id': news.id,
            'title': news.title,
            'content': news.content,
            'category': news.category,
            'author_name': news.author_name or news.get_author_display(),
            'excerpt': news.excerpt,
            'image': news.image.url if news.image else None,
            'is_featured': news.is_featured,
            'created_at': news.created_at.isoformat()
        }
        return JsonResponse(data)
    except News.DoesNotExist:
        return JsonResponse({'error': 'News not found'}, status=404)

def gallery_api(request):
    gallery = Gallery.objects.all().values('title', 'image', 'description')
    return JsonResponse(list(gallery), safe=False)

@csrf_exempt
def contact_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            Contact.objects.create(
                name=data['name'],
                email=data['email'],
                subject=data['subject'],
                message=data['message']
            )
            return JsonResponse({'status': 'success', 'message': 'Message sent successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

@csrf_exempt
def newsletter_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            from .models import Newsletter
            newsletter, created = Newsletter.objects.get_or_create(
                email=data['email'],
                defaults={'is_active': True}
            )
            if created:
                return JsonResponse({'status': 'success', 'message': 'Successfully subscribed to newsletter!'})
            else:
                return JsonResponse({'status': 'info', 'message': 'Email already subscribed!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

@csrf_exempt
def event_rsvp_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            event = Event.objects.get(id=data['event_id'])
            EventRSVP.objects.create(
                event=event,
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                phone=data.get('phone', ''),
                alu_id=data['alu_id'],
                dietary_restrictions=data.get('dietary_restrictions', ''),
                additional_guests=int(data.get('additional_guests', 0)),
                comments=data.get('comments', '')
            )
            return JsonResponse({'status': 'success', 'message': 'RSVP submitted successfully!'})
        except Event.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Event not found'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

@csrf_exempt
def membership_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            Membership.objects.create(
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                phone=data['phone'],
                student_id=data['student_id'],
                program=data['program'],
                year_of_study=data['year_of_study'],
                membership_type=data.get('membership_type', 'regular')
            )
            return JsonResponse({'status': 'success', 'message': 'Membership application submitted successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

def contact_list_api(request):
    contacts = Contact.objects.all().order_by('-created_at').values('name', 'email', 'subject', 'message', 'created_at')
    return JsonResponse({'contacts': list(contacts)})

@csrf_exempt
def mentor_application_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            from .models import MentorApplication
            MentorApplication.objects.create(
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                phone=data['phone'],
                graduation_year=int(data['graduation_year']),
                program=data['program'],
                current_position=data['current_position'],
                company=data['company'],
                experience_years=int(data['experience_years']),
                expertise_areas=data['expertise_areas'],
                mentoring_experience=data['mentoring_experience'],
                availability=data['availability'],
                motivation=data['motivation']
            )
            return JsonResponse({'status': 'success', 'message': 'Mentor application submitted successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

@csrf_exempt
def gallery_list_api(request):
    if request.method == 'GET':
        gallery_items = Gallery.objects.all().order_by('-uploaded_at')
        gallery_data = []
        for item in gallery_items:
            gallery_data.append({
                'id': item.id,
                'title': item.title,
                'description': item.description,
                'category': item.category,
                'event_date': item.event_date,
                'is_featured': item.is_featured,
                'is_video': item.is_video,
                'video_url': item.video_url,
                'image': item.image.url if item.image else None,
                'uploaded_at': item.uploaded_at.isoformat()
            })
        return JsonResponse({'status': 'success', 'gallery': gallery_data})
    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)

def alumni_list_api(request):
    if request.method == 'GET':
        alumni_members = Alumni.objects.all().order_by('-graduation_year')
        alumni_data = []
        for member in alumni_members:
            alumni_data.append({
                'id': member.id,
                'first_name': member.first_name,
                'last_name': member.last_name,
                'graduation_year': member.graduation_year,
                'program': member.program,
                'current_position': member.current_position,
                'company': member.company,
                'email': member.email,
                'linkedin': member.linkedin,
                'photo': member.photo.url if member.photo else None,
                'bio': member.bio,
                'achievements': member.achievements,
                'created_at': member.created_at.isoformat()
            })
        return JsonResponse(alumni_data, safe=False)
    return JsonResponse({'status': 'error', 'message': 'Method not allowed'}, status=405)

def mentor_request_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            from .models import MentorRequest
            MentorRequest.objects.create(
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                phone=data['phone'],
                student_id=data['student_id'],
                program=data['program'],
                year_of_study=data['year_of_study'],
                career_interests=data['career_interests'],
                mentoring_goals=data['mentoring_goals'],
                preferred_mentor_background=data['preferred_mentor_background'],
                availability=data['availability'],
                additional_info=data.get('additional_info', '')
            )
            return JsonResponse({'status': 'success', 'message': 'Mentor request submitted successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})