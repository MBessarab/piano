from rest_framework import viewsets

from app.price.models import TypeService
from app.price.serializers import PriceSerializer


class PriceView(viewsets.ModelViewSet):
    queryset = TypeService.objects.all()
    serializer_class = PriceSerializer
