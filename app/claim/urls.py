from django.urls import path, include
from rest_framework.routers import DefaultRouter

from app.claim.views import ClaimView

router = DefaultRouter()
router.register(r'', ClaimView)

urlpatterns = [
    path(r'', include(router.urls)),
]