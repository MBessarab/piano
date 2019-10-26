from django.contrib import admin

from app.price.models import Price


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'time', 'order', 'active')

    def get_queryset(self, request):
        return Price.objects.all()
