from django.db import models


class TypeService(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name='Название услуги',
        unique=True,
    )

    order = models.PositiveIntegerField()

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'type_service'
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class Price(models.Model):

    service = models.ForeignKey(
        TypeService,
        on_delete=models.CASCADE,
        verbose_name='Тип услуги',
    )

    description = models.CharField(
        max_length=255,
        verbose_name='Описание'
    )

    price = models.PositiveIntegerField(
        verbose_name='Цена',
    )

    time = models.PositiveIntegerField(
        verbose_name='Время (мин)',
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
        return f'{self.service.title} {self.time} {self.price}'

    class Meta:
        db_table = 'price'
        verbose_name = 'Цена'
        verbose_name_plural = 'Цены'
