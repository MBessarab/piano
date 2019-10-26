from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.gift.views import GiftView

router = DefaultRouter()
router.register(r'', GiftView)

urlpatterns = [
    path(r'', include(router.urls)),
]
