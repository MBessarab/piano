from django.contrib import admin

from app.claim.models import Claim


@admin.register(Claim)
class ClaimAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'date_create')

    def get_queryset(self, request):
        return Claim.objects.all()
