from rest_framework import serializers

from app.gift.models import Gift


class GiftSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gift
        fields = '__all__'
