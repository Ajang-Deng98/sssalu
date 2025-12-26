from django.contrib import admin
from .models import (
    Event, Project, News, Membership, Gallery, Alumni, Newsletter, 
    SiteSettings, EventRSVP, MentorApplication, MentorRequest, Contact
)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'status', 'created_by', 'created_at']
    list_filter = ['status', 'date', 'created_by']
    search_fields = ['title', 'description']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'start_date', 'end_date', 'created_by']
    list_filter = ['category', 'status', 'created_by', 'start_date']
    search_fields = ['title', 'description']

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'created_by', 'created_at']
    list_filter = ['category', 'is_featured', 'created_by', 'created_at']
    search_fields = ['title', 'content', 'author_name']

@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'program', 'membership_type', 'joined_at']
    list_filter = ['membership_type', 'program', 'year_of_study']
    search_fields = ['first_name', 'last_name', 'email', 'student_id']

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'is_video', 'uploaded_by', 'uploaded_at']
    list_filter = ['category', 'is_featured', 'is_video', 'uploaded_by', 'uploaded_at']
    search_fields = ['title', 'description']

@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'graduation_year', 'current_position', 'company']
    list_filter = ['graduation_year', 'program']
    search_fields = ['first_name', 'last_name', 'company', 'current_position']

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ['email', 'subscribed_at', 'is_active']
    list_filter = ['is_active', 'subscribed_at']
    search_fields = ['email']
    readonly_fields = ['email', 'subscribed_at']

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Site Information', {
            'fields': ['site_name', 'site_description']
        }),
        ('Social Media Links', {
            'fields': ['facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url']
        }),
        ('Contact Information', {
            'fields': ['contact_address', 'contact_email', 'contact_phone']
        }),
        ('Newsletter Section', {
            'fields': ['newsletter_title', 'newsletter_description']
        }),
        ('Footer', {
            'fields': ['copyright_text']
        }),
    ]
    
    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()
    
    def has_delete_permission(self, request, obj=None):
        return False

@admin.register(EventRSVP)
class EventRSVPAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'event', 'email', 'created_at']
    list_filter = ['event', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'alu_id']
    readonly_fields = ['created_at']

admin.site.register(Contact)

@admin.register(MentorApplication)
class MentorApplicationAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'graduation_year', 'current_position', 'status', 'created_at']
    list_filter = ['status', 'graduation_year', 'program', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'current_position', 'company']
    readonly_fields = ['created_at']
    actions = ['approve_applications', 'reject_applications']
    
    def approve_applications(self, request, queryset):
        queryset.update(status='approved')
    approve_applications.short_description = "Approve selected applications"
    
    def reject_applications(self, request, queryset):
        queryset.update(status='rejected')
    reject_applications.short_description = "Reject selected applications"

@admin.register(MentorRequest)
class MentorRequestAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'student_id', 'program', 'year_of_study', 'status', 'created_at']
    list_filter = ['status', 'program', 'year_of_study', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'student_id']
    readonly_fields = ['created_at']
    actions = ['mark_as_matched', 'mark_as_completed']
    
    def mark_as_matched(self, request, queryset):
        queryset.update(status='matched')
    mark_as_matched.short_description = "Mark as matched with mentor"
    
    def mark_as_completed(self, request, queryset):
        queryset.update(status='completed')
    mark_as_completed.short_description = "Mark mentoring as completed"