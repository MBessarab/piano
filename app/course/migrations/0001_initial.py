# Generated by Django 2.2.6 on 2019-11-01 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('img', models.ImageField(upload_to='', verbose_name='Картинка')),
                ('description', models.TextField(verbose_name='Текст статьи')),
                ('order', models.PositiveIntegerField(blank=True, null=True, verbose_name='Сортировка')),
                ('active', models.BooleanField(default=True)),
                ('date_create', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('date_update', models.DateTimeField(auto_now=True, verbose_name='Дата обновления')),
            ],
            options={
                'verbose_name': 'Курс',
                'verbose_name_plural': 'Курсы',
                'db_table': 'course',
                'abstract': False,
            },
        ),
    ]
