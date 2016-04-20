import { deferConfig as defer } from 'config/defer'
import path from 'path'
export default {
    root: process.cwd(),
    dir: defer(cfg => (cfg.root)),
    templates: {
        root: defer(function (cfg) { return path.join(cfg.root, 'client/templates')})
    },
    folders: {
        source: './client/',
        dist: './public/',
    },
    props: {
        title: {
            description: 'Title сайта',
            value: 'Выиграй путешествие по местам съемок «Игры престолов»!'
        },
        description: {
            description: 'Description сайта',
            value: 'Aviasales.ru ищет билеты в Семь Королевств'
        },
        shareImages: {
            description: 'Картинки для шеринга',
            value: {
                default: ''
            }
        },
        mainSiteUrl: {
            description: 'Ссылка на сайт Aviasales',
            value: 'https://aviasales.ru/?utm_source=landing&utm_medium=aviasales&utm_campaign=got'
        },
        mainTitle: {
            description: 'Основной заголовок',
            value: 'Главный приз конкурса'
        },
        mainDescription: {
            description: 'Основное описание',
            value: 'Главный приз конкурса <a data-event="Logo" href="https://aviasales.ru/?utm_source=landing&utm_medium=aviasales&utm_campaign=got">Aviasales</a> и&nbsp;Amediateka – путешествие<br/>на&nbsp;двоих по&nbsp;местам съёмок Игры престолов!'
        },
        icons: {
            description: 'Иконки',
            value: [
                'Перелёт на двоих<br/>Москва — Дублин',
                'Проживание в отеле&nbsp;3*<br/>7 ночей в Дублине',
                'Тур по местам съёмок<br/>Игры престолов']
        },
        externalTitle: {
            description: 'Заголовок блока перед внешней ссылкой',
            value: '​Борись за главный приз от официального перевозчика Вестероса <a data-event="Logo" target="_blank" href="https://aviasales.ru/?utm_source=landing&utm_medium=aviasales&utm_campaign=got"><span class="cern cern--a">A</span>viasale<span class="cern cern--s">s</span>.ru</a>'
        },
        externalLink: {
            description: 'Внешняя ссылка',
            value: 'http://got6.amediateka.ru/?utm_source=aviasales'
        },
        externalLinkText: {
            description: 'Текст на кнопке',
            value: 'Участвовать'
        },
        countriesTitle: {
            description: 'Заголовок перед странами',
            value: 'Ты можешь попасть и в другие места<br/>Съёмок Семи Королевств самостоятельно'
        },
        countries: {
            description: 'Список стран',
            value: [
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Королевскую гавань круглый год'
                    },
                    shareDescription: {
                        value: 'Лети в Семь Королевств!'
                    },
                    name: {
                        description: 'Название',
                        value: 'Королевская гавань'
                    },
                    place: {
                        description: 'Место съёмок',
                        value: 'Хорватия, Дубровник'
                    },
                    time: {
                        description: 'Время из Москвы',
                        value: '4 серии нового сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Позорный проход Королевы Серсеи к Красному замку под улюлюканье толпы и унизительные действия в её сторону.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/dubrovnik.1.jpg', '/layout/images/photos/dubrovnik.2.jpg', '/layout/images/photos/dubrovnik.3.jpg']
                    },
                    airport: {
                        description: 'Код аэропорта',
                        value: 'DBV'
                    },
                },
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Дорн круглый год'
                    },
                    shareDescription: {
                        value: 'Лети в Семь Королевств!'
                    },
                    name: {
                        description: 'Название',
                        value: 'Дорн'
                    },
                    place: {
                        description: 'Место съёмок',
                        value: 'Испания, Севилья'
                    },
                    time: {
                        description: 'Время из Москвы',
                        value: '8 серии нового сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Мерцилла Ланнистер узнает, что она дочь Джейми Ланнистера, и умирает от яда, которым её отравила Эллария Сэнд.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/seville.1.jpg', '/layout/images/photos/seville.2.jpg', '/layout/images/photos/seville.3.jpg']
                    },
                    airport: {
                        description: 'Код аэропорта',
                        value: 'SVQ'
                    },
                },
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Миэрин круглый год'
                    },
                    shareDescription: {
                        value: 'Лети в Семь Королевств!'
                    },
                    name: {
                        description: 'Название',
                        value: 'Миэрин'
                    },
                    place: {
                        description: 'Место съёмок',
                        value: 'Хорватия, Сплит'
                    },
                    time: {
                        description: 'Время из Москвы',
                        value: '5 серии нового сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Лорд Варис прибывает в Миэрин, чтобы править вместе с Тирионом, в то время как Дайнерис покидает город на драконе и сталкивается с датракийцами.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/seville.1.jpg', '/layout/images/photos/seville.2.jpg', '/layout/images/photos/seville.3.jpg']
                    },
                    airport: {
                        description: 'Код аэропорта',
                        value: 'SPU'
                    },
                },
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Земли одичалых круглый год'
                    },
                    shareDescription: {
                        value: 'Лети в Семь Королевств!'
                    },
                    name: {
                        description: 'Название',
                        value: 'Земли одичалых'
                    },
                    place: {
                        description: 'Место съёмок',
                        value: 'Исландия, Рекьявик'
                    },
                    time: {
                        description: 'Время из Москвы',
                        value: '17 серии нового сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Происходит масштабная битва одичалых и Братьев Дозора, закончившаяся приходом белых ходоков. Король Ночи воскрешает умерших одичалых: они восстают упырями.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/islandia.1.jpg', '/layout/images/photos/islandia.2.jpg', '/layout/images/photos/islandia.3.jpg']
                    },
                    airport: {
                        description: 'Код аэропорта',
                        value: 'REK'
                    },
                },
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Пустыню Датракийцев круглый год'
                    },
                    shareDescription: {
                        value: 'Лети в Семь Королевств!'
                    },
                    name: {
                        description: 'Название',
                        value: 'Пустыня Датракийцев'
                    },
                    place: {
                        description: 'Место съёмок',
                        value: 'Марокко, Маракеш'
                    },
                    time: {
                        description: 'Время из Москвы',
                        value: '18 серии нового сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Дракон приносит Дайнерис в земли Датракийцев, которые окружают её.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/marocco.1.jpg', '/layout/images/photos/marocco.2.jpg', '/layout/images/photos/marocco.3.jpg']
                    },
                    airport: {
                        description: 'Код аэропорта',
                        value: 'RAK'
                    },
                }
            ]
        },
        social: {
            value: {
                vkontakte: {
                    short: 'vk',
                    link: 'https://vk.com/aviasalesru',
                    utm: 'utm_source=vk_share&utm_medium=social&utm_campaign=got'

                },
                facebook: {
                    short: 'fb',
                    link: 'https://www.facebook.com/aviasales.ru',
                    utm: 'utm_source=fb_share&utm_medium=social&utm_campaign=got'

                },
                instagram: {
                    link: 'https://instagram.com/aviasales',
                },
                twitter: {
                    short: 'tw',
                    link: 'https://twitter.com/aviasales',
                    utm: 'utm_source=tw_share&utm_medium=social&utm_campaign=got'

                },
                odnoklassniki: {
                    short: 'ok',
                    link: 'https://ok.ru/aviasales',
                    utm: 'utm_source=ok_share&utm_medium=social&utm_campaign=got'

                },
                viber: {
                    link: 'https://chats.viber.com/aviasales',
                }
            }
        }
    }
}
