from app.models import PartitionArticleAbs


class Teacher(PartitionArticleAbs):

    class Meta(PartitionArticleAbs.Meta):
        db_table = 'teacher'
        verbose_name = 'Преподаватели'
        verbose_name_plural = 'Преподаватели'
