from django.db import models


class Price(models.Model):

    name = models.CharField(
        max_length=255,
        verbose_name='Услуга',
    )

    price = models.PositiveIntegerField(
        verbose_name='Цена',
    )

    time = models.PositiveIntegerField(
        verbose_name='Время',
    )

    active = models.BooleanField(
        default=True,
    )

    order = models.PositiveIntegerField(
        null=True,
        blank=True,
        verbose_name='Сортировка',
    )

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'price'
        verbose_name = 'Цены'
        verbose_name_plural = 'Цены'
