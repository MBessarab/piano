from django.db import models
from django.contrib.postgres.fields import JSONField


class InfoProperty(models.Model):

    key = models.CharField()

    value = models.CharField()

    class Meta:
        db_table = 'info_property'
        verbose_name = 'Свойства компании'

#
# class Info(models.Model):
#
#     name = models.CharField()
#
#     address = models.CharField()
#
#     phone_number = models.CharField()
#
#     email = models.CharField()
#
#     socials = JSONField()
#
#     class Meta:
#         db_table = ''
#         verbose_name = 'Piano'


class Partition(models.Model):

    title = models.CharField()

    active = models.BooleanField(
        default=True
    )

    order = models.PositiveIntegerField()

    class Meta:
        db_table = 'partition'
        verbose_name = 'Разделы'
