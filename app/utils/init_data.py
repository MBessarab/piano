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
                <script src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
                <script>
                    let interval = setInterval(()=>{
                    if(window.DGWidgetLoader){
                        new DGWidgetLoader({
                            "width": 640,
                            "height": 600,
                            "borderColor": "#a3a3a3",
                            "pos": {"lat": 47.219826, "lon": 39.685563, "zoom": 16},
                            "opt": {"city": "rostov"},
                            "org": [{"id": "70000001007492088"}]
                        });
                        clearInterval(interval);
                    }
                    }, 10)
                </script>
                <noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в
                    настройках вашего браузера.
                </noscript>
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
    # price()
    gift()
    news()
    main_page()
