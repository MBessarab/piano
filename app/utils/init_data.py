from app.company.models import ContactProperty, Partition, MainPage
from app.price.models import Price


def info_property():
    ContactProperty.objects.bulk_create([
        ContactProperty(
            key='phone_title',
            value='+7 (988) 895 13 56',
        ),
        ContactProperty(
            key='phone_number',
            value='+79888951356',
        ),
        ContactProperty(
            key='address',
            value='г.Ростов-на-Дону' 
                  '\nул.Гусева 2а/5 '
                  '\nДК"Железнодорожников"(ЛенДворец)',
        ),
        ContactProperty(
            key='email',
            value='asvasd123aads-ad@yandex.ru',
        ),
        ContactProperty(
            key='map_widget_code',
            value="""
                <a class="dg-widget-link" 
                href="http://2gis.ru/rostov/firm/70000001007492088/center/39.685563,47.219826/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
                Посмотреть на карте Ростова-на-Дону
                </a>
                <div class="dg-widget-link">
                <a href="http://2gis.ru/rostov/center/39.685563,47.219826/zoom/16/routeTab/rsType/bus/to/39.685563,47.219826╎Piano, музыкальная школа для взрослых и детей?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
                Найти проезд до Piano, музыкальная школа для взрослых и детей
                </a>
                </div>
                <script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
                <script charset="utf-8">new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":47.219826,"lon":39.685563,"zoom":16},"opt":{"city":"rostov"},"org":[{"id":"70000001007492088"}]});</script>
                <noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
            """,
        ),
    ])


def news():
    pass
    # News.objects.bulk_create(
    #     News(
    #         title='',
    #         img='',
    #         description=''
    #     ),
    #     News(
    #         title='',
    #         img='',
    #         description=''
    #     ),
    # )


def gift():
    pass


def partition():
    Partition.objects.bulk_create([
        Partition(
            title='О нас',
            system_name='about',
        ),
        Partition(
            title='Цены',
            system_name='price',
        ),
        Partition(
            title='Курсы',
            system_name='course'
        ),
        Partition(
            title='Подарки',
            system_name='gift'
        ),
        Partition(
            title='Новости',
            system_name='news'
        ),
        Partition(
            title='Преподаватели',
            system_name='teacher'
        ),
    ])


def teacher():
    pass


def course():
    pass


def price():
    Price.objects.bulk_create([
        Price(
            name='Аренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда '
                 'классаАренда классаАренда классаАренда класса',
            price=123,
            time=2
        ),
        Price(
            name='Аренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда классаАренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда классаАренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда классаАренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда классаАренда класса',
            price=123,
            time=1
        ),
        Price(
            name='Аренда классаАренда классаАренда классаАренда класса',
            price=123,
            time=1
        ),
    ])

def main_page():
    MainPage.objects.create(
        partition=Partition.objects.all()[0]
    )

def filling():
    info_property()
    partition()
    teacher()
    course()
    price()
    gift()
    news()
    main_page()
