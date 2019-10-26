from rest_framework import viewsets

from app.price.models import Price
from app.price.serializers import PriceSerializer


class PriceView(viewsets.ModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer
