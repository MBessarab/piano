from django.http import JsonResponse
from rest_framework import viewsets

from app.price.models import Price
from app.price.serializers import PriceSerializer


class PriceView(viewsets.ModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer

    def list(self, request, *args, **kwargs):
        type_services = set()
        for price in self.queryset:
            type_services.add(price.service)

        data = []
        for service in type_services:
            data.append({
                'service': service.title,
                'order': service.order,
                'prices': list(self.queryset.filter(service=service).values()),
            })

        return JsonResponse(data, safe=False)
