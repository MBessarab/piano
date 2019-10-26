from django.db import models


class Claim(models.Model):
    name = models.CharField(
        max_length=20,
        verbose_name='Имя',
    )

    phone = models.CharField(
        max_length=15,
        verbose_name='Телефон',
    )

    date_create = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата создания',
    )

    def __str__(self):
        return f'{self.name} {self.phone}'

    class Meta:
        db_table = 'claim'
        verbose_name = 'Заявки'
        verbose_name_plural = 'Заявки'
