from django.db import models


class ContactProperty(models.Model):

    key = models.CharField(
        max_length=15,
        verbose_name='Ключ',
    )

    value = models.TextField(
        verbose_name='Значение',
    )

    order = models.PositiveIntegerField(
        blank=True,
        null=True,
        verbose_name='Сортировка',
    )

    def __str__(self):
        return self.key

    class Meta:
        db_table = 'contact_property'
        verbose_name = 'Свойство'
        verbose_name_plural = 'Свойства компании'


class Partition(models.Model):

    title = models.CharField(
        max_length=20,
        verbose_name='Название',
    )

    system_name = models.CharField(
        max_length=20,
        unique=True,
        verbose_name='Системное имя'
    )

    active = models.BooleanField(
        default=True,
    )

    order = models.PositiveIntegerField(
        blank=True,
        null=True,
        verbose_name='Очередь',
    )

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'partition'
        verbose_name = 'Раздел'
        verbose_name_plural = 'Разделы'


class MainPage(models.Model):
    partition = models.ForeignKey(
        Partition,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.partition.title

    class Meta:
        db_table = 'main_page'
        verbose_name = 'Главная страница'
        verbose_name_plural = 'Главная страница'
