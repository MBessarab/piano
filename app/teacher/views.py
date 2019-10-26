from rest_framework import viewsets

from app.teacher.models import Teacher
from app.teacher.serializers import TeacherSerializer


class TeacherView(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
