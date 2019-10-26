from app.models import PartitionArticleAbs


class Gift(PartitionArticleAbs):

    class Meta(PartitionArticleAbs.Meta):
        db_table = 'gift'
        verbose_name = 'Подарки'
        verbose_name_plural = 'Подарки'
