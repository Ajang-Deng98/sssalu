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
    events = Event.objects.all().values('title', 'description', 'date', 'location', 'image')
    return JsonResponse(list(events), safe=False)

def news_api(request):
    news = News.objects.all().values('title', 'content', 'image', 'created_at')
    return JsonResponse(list(news), safe=False)

def gallery_api(request):
    gallery = Gallery.objects.all().values('title', 'image', 'description')
    return JsonResponse(list(gallery), safe=False)

@csrf_exempt
def contact_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        Contact.objects.create(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})