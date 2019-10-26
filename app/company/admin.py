from django.contrib import admin

from app.company.models import ContactProperty, Partition, MainPage


@admin.register(ContactProperty)
class ContactPropertyAdmin(admin.ModelAdmin):
    list_display = ('key', 'value', 'order')

    def get_queryset(self, request):
        return ContactProperty.objects.all()


@admin.register(Partition)
class PartitionAdmin(admin.ModelAdmin):
    list_display = ('title', 'system_name', 'order', 'active')

    def get_queryset(self, request):
        return Partition.objects.all()


@admin.register(MainPage)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('partition',)

    def get_queryset(self, request):
        return MainPage.objects.all()
