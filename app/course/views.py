from rest_framework import viewsets

from app.course.models import Course
from app.course.serializers import CourseSerializer


class CourseView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
