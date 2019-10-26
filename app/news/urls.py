from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.news.views import NewsView

router = DefaultRouter()
router.register(r'', NewsView)

urlpatterns = [
    path(r'', include(router.urls)),
]
