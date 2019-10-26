from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.teacher.views import TeacherView

router = DefaultRouter()
router.register(r'', TeacherView)

urlpatterns = [
    path(r'', include(router.urls)),
]
