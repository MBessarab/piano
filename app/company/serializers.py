from rest_framework import serializers

from app.company.models import ContactProperty, Partition, MainPage


class ContactPropertySerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactProperty
        fields = '__all__'


class PartitionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Partition
        fields = '__all__'


class MainPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = MainPage
        fields = '__all__'
