from django.db import models


class PartitionArticleAbs(models.Model):

    title = models.CharField(
        max_length=255,
        verbose_name='Заголовок',
    )

    img = models.ImageField(
        verbose_name='Картинка',
    )

    description = models.TextField(
        verbose_name='Текст статьи',
    )

    order = models.PositiveIntegerField(
        blank=True,
        null=True,
        verbose_name='Сортировка',
    )

    active = models.BooleanField(
        default=True,
    )

    date_create = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата создания',
    )

    date_update = models.DateTimeField(
        auto_now=True,
        verbose_name='Дата обновления',
    )

    def __str__(self):
        return self.title

    class Meta:
        abstract = True
