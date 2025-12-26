from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('events/', views.events, name='events'),
    path('news/', views.news, name='news'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact/', views.contact, name='contact'),
    path('membership/', views.membership, name='membership'),
    path('projects/', views.projects, name='projects'),
    path('alumni/', views.alumni, name='alumni'),
    path('event-rsvp-submit/', views.event_rsvp_submit, name='event_rsvp_submit'),
    path('contact-submit/', views.contact_submit, name='contact_submit'),
    path('api/events/', views.events_api, name='events_api'),
    path('api/news/', views.news_api, name='news_api'),
    path('api/news/<int:news_id>/', views.news_detail_api, name='news_detail_api'),
    path('api/gallery/', views.gallery_list_api, name='gallery_list_api'),
    path('api/contact/', views.contact_api, name='contact_api'),
    path('api/newsletter/', views.newsletter_api, name='newsletter_api'),
    path('api/event-rsvp/', views.event_rsvp_api, name='event_rsvp_api'),
    path('api/membership/', views.membership_api, name='membership_api'),
    path('api/mentor-application/', views.mentor_application_api, name='mentor_application_api'),
    path('api/alumni/', views.alumni_list_api, name='alumni_list_api'),
    path('api/mentor-request/', views.mentor_request_api, name='mentor_request_api'),
    path('api/contacts/', views.contact_list_api, name='contact_list_api'),
]