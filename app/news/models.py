from app.models import PartitionArticleAbs


class News(PartitionArticleAbs):

    class Meta(PartitionArticleAbs.Meta):
        db_table = 'news'
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
