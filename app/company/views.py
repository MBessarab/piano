from rest_framework import viewsets

from app.company.models import ContactProperty, Partition, MainPage
from app.company.serializers import ContactPropertySerializer, PartitionSerializer, MainPageSerializer


class ContactPropertyView(viewsets.ModelViewSet):
    queryset = ContactProperty.objects.all()
    serializer_class = ContactPropertySerializer


class PartitionView(viewsets.ModelViewSet):
    queryset = Partition.objects.all()
    serializer_class = PartitionSerializer


class MainPageView(viewsets.ModelViewSet):
    queryset = MainPage.objects.all()
    serializer_class = MainPageSerializer
