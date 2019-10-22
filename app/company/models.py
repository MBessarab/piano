from django.db import models
from django.contrib.postgres.fields import JSONField


class InfoProperty(models.Model):

    key = models.CharField()

    value = models.CharField()

    class Meta:
        db_table = 'info_property'
        verbose_name = 'Свойства компании'


class Info(models.Model):

    name = models.CharField()

    address = models.CharField()

    phone_number = models.CharField()

    email = models.CharField()

    partitions = JSONField()

    class Meta:
        db_table = 'company_info'
        verbose_name = 'Piano'

