"""piano URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from app import settings
from app.gift import urls as gift_urls
from app.teacher import urls as teacher_urls
from app.price import urls as price_urls
from app.news import urls as news_urls
from app.course import urls as course_urls
from app.company import urls as company_urls
from app.claim import urls as claim_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    # path(r'', TemplateView.as_view(template_name='registry/index.html')),
    path(r'api/gift/', include(gift_urls)),
    path(r'api/teacher/', include(teacher_urls)),
    path(r'api/price/', include(price_urls)),
    path(r'api/news/', include(news_urls)),
    path(r'api/course/', include(course_urls)),
    path(r'api/company/', include(company_urls)),
    path(r'api/claim/', include(claim_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
