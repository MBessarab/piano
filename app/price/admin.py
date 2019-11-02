from django.contrib import admin

from app.price.models import Price, TypeService


@admin.register(TypeService)
class TypeServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')

    def get_queryset(self, request):
        return TypeService.objects.all()


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ('service', 'description', 'price', 'time', 'order', 'active')

    def get_queryset(self, request):
        return Price.objects.all()
