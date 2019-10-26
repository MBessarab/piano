from django.contrib import admin

from app.gift.models import Gift


@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'order', 'active')

    def get_queryset(self, request):
        return Gift.objects.all()
