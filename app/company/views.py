import json
from http import HTTPStatus

from rest_framework import viewsets
from rest_framework.response import Response
from url_filter.integrations.drf import DjangoFilterBackend

from app.company.models import ContactProperty, Partition, MainPage
from app.company.serializers import ContactPropertySerializer, PartitionSerializer, MainPageSerializer


class ContactPropertyView(viewsets.ModelViewSet):
    queryset = ContactProperty.objects.all()
    serializer_class = ContactPropertySerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['key',]


class PartitionView(viewsets.ModelViewSet):
    queryset = Partition.objects.all()
    serializer_class = PartitionSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['active',]


class MainPageView(viewsets.ModelViewSet):
    queryset = MainPage.objects.all()
    serializer_class = MainPageSerializer

    def list(self, request, *args, **kwargs):
        if len(self.queryset) == 1:
            response = json.dumps({
                'partition': self.queryset[0].partition.system_name,
            })
            return Response(json.loads(response), HTTPStatus.OK)
        else:
            response = json.dumps({
                'error': 'В базе больше одной записи!',
            })
            Response(json.loads(response), HTTPStatus.INTERNAL_SERVER_ERROR)
