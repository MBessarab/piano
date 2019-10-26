from django.contrib import admin

from app.course.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'order', 'active')

    def get_queryset(self, request):
        return Course.objects.all()
