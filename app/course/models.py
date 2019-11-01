from app.models import PartitionArticleAbs


class Course(PartitionArticleAbs):

    class Meta(PartitionArticleAbs.Meta):
        db_table = 'course'
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
