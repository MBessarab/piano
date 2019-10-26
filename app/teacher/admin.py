from django.contrib import admin

from app.teacher.models import Teacher


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'order', 'active')

    def get_queryset(self, request):
        return Teacher.objects.all()
