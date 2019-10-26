from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.company.views import ContactPropertyView, PartitionView, MainPageView

router = DefaultRouter()
router.register(r'contact', ContactPropertyView)
router.register(r'partition', PartitionView)
router.register(r'main_page', MainPageView)

urlpatterns = [
    path(r'', include(router.urls)),
]
