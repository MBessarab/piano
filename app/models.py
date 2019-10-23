from django.db import models

from app.company.models import Partition


class PartitionAbs(models.Model):

    partition = models.ForeignKey(
        Partition,
        on_delete=models.CASCADE
    )

    active = models.BooleanField(
        default=True
    )

    class Meta:
        abstract = True


class PartitionArticleAbs(PartitionAbs):

    title = models.CharField()

    img = models.ImageField()

    description = models.TextField()

    class Meta:
        abstract = True
