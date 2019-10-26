from django.contrib import admin

from app.news.models import News


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'order', 'active')

    def get_queryset(self, request):
        return News.objects.all()
