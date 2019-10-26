from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.price.views import PriceView

router = DefaultRouter()
router.register(r'', PriceView)

urlpatterns = [
    path(r'', include(router.urls)),
]
