from app.models import PartitionArticleAbs


class News(PartitionArticleAbs):

    class Meta(PartitionArticleAbs.Meta):
        db_table = 'News'
        verbose_name = 'Новости'
