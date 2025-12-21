from django.contrib import admin
from .models import Event, Project, News, Membership, Gallery, Alumni, Contact, Newsletter, SiteSettings, EventRSVP

# Unregister Contact if already registered
try:
    admin.site.unregister(Contact)
except admin.sites.NotRegistered:
    pass

# Register Contact with fresh configuration
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'subject', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject')
    ordering = ('-id',)
    list_per_page = 50
    
    def changelist_view(self, request, extra_context=None):
        # Force refresh of queryset
        return super().changelist_view(request, extra_context)

admin.site.register(Contact, ContactAdmin)

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