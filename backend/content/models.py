from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('past', 'Past'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    image = models.ImageField(upload_to='events/', blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('outreach', 'Community Outreach'),
        ('leadership', 'Leadership & Academic'),
        ('innovation', 'Innovation & Entrepreneurship'),
        ('partnership', 'Partnerships & Collaborations'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='outreach')
    status = models.CharField(max_length=50, choices=[('ongoing', 'Ongoing'), ('completed', 'Completed'), ('planned', 'Planned')])
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    impact_details = models.TextField(blank=True, help_text='e.g., 50+ students supported, 200+ community members reached')
    image = models.ImageField(upload_to='projects/', blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class News(models.Model):
    CATEGORY_CHOICES = [
        ('news', 'Association News'),
        ('articles', 'Articles & Reflections'),
        ('spotlights', 'Student Spotlights'),
        ('featured', 'Featured Post'),
    ]
    
    title = models.CharField(max_length=200)
    content = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='news')
    author_name = models.CharField(max_length=100, blank=True, help_text='Author name to display (if different from created_by)')
    excerpt = models.TextField(max_length=300, blank=True, help_text='Short description for preview')
    image = models.ImageField(upload_to='news/', blank=True)
    is_featured = models.BooleanField(default=False, help_text='Mark as featured post')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    def get_author_display(self):
        if self.author_name:
            return self.author_name
        elif self.created_by.first_name and self.created_by.last_name:
            return f"{self.created_by.first_name} {self.created_by.last_name}"
        else:
            return self.created_by.username

class Membership(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    student_id = models.CharField(max_length=50)
    program = models.CharField(max_length=100)
    year_of_study = models.CharField(max_length=20)
    membership_type = models.CharField(max_length=50, choices=[('regular', 'Regular'), ('executive', 'Executive')])
    joined_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Gallery(models.Model):
    CATEGORY_CHOICES = [
        ('cultural', 'Cultural Events'),
        ('academic', 'Academic Activities'),
        ('community', 'Community Service'),
        ('social', 'Social Gatherings'),
        ('featured', 'Featured Highlights'),
        ('event_gallery', 'Event Gallery'),
    ]
    
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery/')
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='cultural')
    event_date = models.CharField(max_length=100, blank=True, help_text='e.g., May 2022, July 2023')
    is_featured = models.BooleanField(default=False, help_text='Show in featured highlights section')
    is_video = models.BooleanField(default=False, help_text='Mark as video content')
    video_url = models.URLField(blank=True, help_text='YouTube embed URL for videos')
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Alumni(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    graduation_year = models.IntegerField()
    program = models.CharField(max_length=100)
    current_position = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    linkedin = models.URLField(blank=True)
    photo = models.ImageField(upload_to='alumni/', blank=True)
    bio = models.TextField()
    achievements = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.graduation_year}"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

class EventRSVP(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    alu_id = models.CharField(max_length=50)
    dietary_restrictions = models.CharField(max_length=200, blank=True)
    additional_guests = models.IntegerField(default=0)
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.event.title}"

class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email

class SiteSettings(models.Model):
    site_name = models.CharField(max_length=100, default='SSSALU')
    site_description = models.TextField(default='South Sudanese Student Association at African Leadership University')
    facebook_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    contact_address = models.TextField(default='African Leadership University, Kigali, Rwanda')
    contact_email = models.EmailField(default='sssalu@alu.edu')
    contact_phone = models.CharField(max_length=20, default='+250 123 456 789')
    copyright_text = models.CharField(max_length=200, default='2023 South Sudanese Student Association - ALU. All rights reserved.')
    newsletter_title = models.CharField(max_length=100, default='Subscribe to Our Newsletter')
    newsletter_description = models.TextField(default='Stay updated with the latest news, events, and stories from the South Sudanese Student Association at ALU.')
    
    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'
    
    def __str__(self):
        return 'Site Settings'
    
    def save(self, *args, **kwargs):
        if not self.pk and SiteSettings.objects.exists():
            raise ValueError('Only one SiteSettings instance is allowed')
        return super().save(*args, **kwargs)

class MentorApplication(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    graduation_year = models.IntegerField()
    program = models.CharField(max_length=100)
    current_position = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    experience_years = models.IntegerField()
    expertise_areas = models.TextField(help_text='Areas of expertise (e.g., Software Development, Business Strategy)')
    mentoring_experience = models.TextField(help_text='Previous mentoring experience')
    availability = models.CharField(max_length=100, help_text='e.g., Weekends, Evenings')
    motivation = models.TextField(help_text='Why do you want to become a mentor?')
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')], default='pending')

    def __str__(self):
        return f"{self.first_name} {self.last_name} - Mentor Application"

class MentorRequest(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    student_id = models.CharField(max_length=50)
    program = models.CharField(max_length=100)
    year_of_study = models.CharField(max_length=20)
    career_interests = models.TextField(help_text='Areas of career interest')
    mentoring_goals = models.TextField(help_text='What do you hope to achieve through mentoring?')
    preferred_mentor_background = models.TextField(help_text='Preferred mentor background or expertise')
    availability = models.CharField(max_length=100, help_text='e.g., Weekends, Evenings')
    additional_info = models.TextField(blank=True, help_text='Any additional information')
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('matched', 'Matched'), ('completed', 'Completed')], default='pending')

    def __str__(self):
        return f"{self.first_name} {self.last_name} - Mentor Request"