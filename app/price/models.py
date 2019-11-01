from django.db import models


class Price(models.Model):

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
        return f'${self.service.title} ${self.time}'

    class Meta:
        db_table = 'price'
        verbose_name = 'Цена'
        verbose_name_plural = 'Цены'


class TypeService(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name='Название услуги',
        unique=True,
    )

    price = models.ManyToManyField(Price)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'type_service'
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


