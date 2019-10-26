from rest_framework import viewsets

from app.news.models import News
from app.news.serializers import NewsSerializer


class NewsView(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
