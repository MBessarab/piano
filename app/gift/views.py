from rest_framework import viewsets

from app.gift.models import Gift
from app.gift.serializers import GiftSerializer


class GiftView(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
