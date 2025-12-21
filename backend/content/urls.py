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
    path('api/gallery/', views.gallery_api, name='gallery_api'),
    path('api/contact/', views.contact_api, name='contact_api'),

]