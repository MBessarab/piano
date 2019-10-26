from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.course.views import CourseView

router = DefaultRouter()
router.register(r'', CourseView)

urlpatterns = [
    path(r'', include(router.urls)),
]
