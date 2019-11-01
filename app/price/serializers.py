from rest_framework import serializers

from app.price.models import TypeService


class PriceSerializer(serializers.ModelSerializer):

    class Meta:
        model = TypeService
        fields = '__all__'
