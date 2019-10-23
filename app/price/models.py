from django.db import models


class Price(models.Model):

    name = models.CharField()

    price = models.PositiveIntegerField()

    time = models.PositiveIntegerField()

    active = models.BooleanField(
        default=True
    )

    class Meta:
        db_table = 'price'
        verbose_name = 'Цены'
