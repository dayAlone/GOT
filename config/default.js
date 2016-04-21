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
                vk: '/layout/images/shares/GOT_social_1200x630_Westeros.jpg',
                fb: '/layout/images/shares/GOT_social_1200x630_Westeros.jpg',
                tw: '/layout/images/shares/GOT_social_1024x512_Westeros.jpg',
            }
        },
        shareLinks: {
            value: {
                tw: 'http://avs.io/bK1'
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
            value: 'Главный приз конкурса <a data-event="Logo" rel="nofollow" href="https://aviasales.ru/?utm_source=landing&utm_medium=aviasales&utm_campaign=got">Aviasales</a> и&nbsp;Amediateka – путешествие<br/> на&nbsp;двоих по&nbsp;местам съёмок Игры престолов!'
        },
        icons: {
            description: 'Иконки',
            value: [
                {
                    text: {
                        value: 'Перелёт на двоих<br/> Москва — Дублин',
                    },
                    event: {
                        value: 'button_as',
                    },
                    group: {
                        value: 'Buttons',
                    },
                    link: {
                        value: 'https://www.aviasales.ru/routes/mow/dub?utm_source=landing&utm_medium=aviasales&utm_campaign=got'
                    },
                },
                {
                    text: {
                        value: 'Проживание в отеле&nbsp;3*<br/> 7 ночей в&nbsp;Дублине',
                    },
                    event: {
                        value: 'button_hl',
                    },
                    group: {
                        value: 'Buttons',
                    },
                    link: {
                        value: 'https://hotellook.ru/cities/dublin?utm_source=landing&utm_medium=aviasales&utm_campaign=got&marker=vm.got'
                    },
                },
                {
                    text: {
                        value: 'Тур по местам съёмок<br/> Игры престолов',
                    },
                    event: {
                        value: 'Scrolling_down',
                    },
                    group: {
                        value: 'Scrolling',
                    },
                    link: {
                        value: '#'
                    },
                }]
        },
        externalTitle: {
            description: 'Заголовок блока перед внешней ссылкой',
            value: '​Борись за главный приз от официального перевозчика Вестероса <a data-event="Logo" target="_blank" rel="nofollow" href="https://aviasales.ru/?utm_source=landing&utm_medium=aviasales&utm_campaign=got"><span class="cern cern--a">A</span>viasale<span class="cern cern--s">s</span><span class="cern cern--dot">.</span>ru</a>'
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
            value: 'Ты можешь попасть и&nbsp;в&nbsp;другие места<br/> Съёмок Семи Королевств самостоятельно'
        },
        countries: {
            description: 'Список стран',
            value: [
                {
                    shareTitle: {
                        value: 'Дешёвые авиабилеты в Королевскую гавань круглый год'
                    },
                    shareImages: {
                        value: {
                            vk: '/layout/images/shares/GOT_social_1200x534_Royal_Harbor.jpg',
                            fb: '/layout/images/shares/GOT_social_1200x630_Royal_Harbor.jpg',
                            tw: '/layout/images/shares/GOT_social_1024x512_Royal_Harbor.jpg'
                        }
                    },
                    shareLinks: {
                        value: {
                            tw: 'http://avs.io/bK3'
                        }
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
                        value: '4&nbsp;серии нового&nbsp;сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Королева Серсея признаёт свои грехи, и&nbsp;проходит длинный путь очищения от&nbsp;места заточения к&nbsp;Красному замку, под улюлюканье толпы и&nbsp;унизительные действия в&nbsp;её&nbsp;сторону.'
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
                    shareImages: {
                        value: {
                            vk: '/layout/images/shares/GOT_social_1200x534_Dorne.jpg',
                            fb: '/layout/images/shares/GOT_social_1200x630_Dorne.jpg',
                            tw: '/layout/images/shares/GOT_social_1024x512_Dorne.jpg'
                        }
                    },
                    shareLinks: {
                        value: {
                            tw: 'http://avs.io/bK5'
                        }
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
                        value: '8&nbsp;серий нового&nbsp;сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Мирцелла Ланнистер узнаёт, что она дочь Джейми Ланнистера и&nbsp;умирает от&nbsp;яда, которым её&nbsp;отравила Эллария Сэнд.'
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
                    shareImages: {
                        value: {
                            vk: '/layout/images/shares/GOT_social_1200x534_Meereen.jpg',
                            fb: '/layout/images/shares/GOT_social_1200x630_Meereen.jpg',
                            tw: '/layout/images/shares/GOT_social_1024x512_Meereen.jpg'
                        }
                    },
                    shareLinks: {
                        value: {
                            tw: 'http://avs.io/bK6'
                        }
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
                        value: '5&nbsp;серий нового&nbsp;сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Лорд Варис прибывает в&nbsp;Миэрин, чтобы править вместе с&nbsp;Тирионом, в&nbsp;то&nbsp;время как Дайнерис покидает город на&nbsp;драконе и&nbsp;сталкивается с&nbsp;датракийцами.'
                    },
                    images: {
                        description: 'Изображения',
                        value: ['/layout/images/photos/split.1.jpg', '/layout/images/photos/split.2.jpg', '/layout/images/photos/split.3.jpg']
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
                    shareImages: {
                        value: {
                            vk: '/layout/images/shares/GOT_social_1200x534_Wild_Earth.jpg',
                            fb: '/layout/images/shares/GOT_social_1200x630_Wild_Earth.jpg',
                            tw: '/layout/images/shares/GOT_social_1024x512_Wild_Earth.jpg'
                        }
                    },
                    shareLinks: {
                        value: {
                            tw: 'http://avs.io/bK7'
                        }
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
                        value: '17&nbsp;серий нового&nbsp;сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Происходит масштабная битва одичалых и&nbsp;Братьев Дозора, закончившаяся приходом белых ходоков. Король Ночи воскрешает умерших одичалых: они восстают упырями.'
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
                    shareImages: {
                        value: {
                            vk: '/layout/images/shares/GOT_social_1200x534_Desert_Dothraki.jpg',
                            fb: '/layout/images/shares/GOT_social_1200x630_Desert_Dothraki.jpg',
                            tw: '/layout/images/shares/GOT_social_1024x512_Desert_Dothraki.jpg'
                        }
                    },
                    shareLinks: {
                        value: {
                            tw: 'http://avs.io/bK8'
                        }
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
                        value: '18&nbsp;серий нового&nbsp;сезона'
                    },
                    description: {
                        description: 'Описание/спойлер',
                        value: 'Дракон приносит Дайнерис в&nbsp;земли Датракийцев, которые окружают&nbsp;её.'
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
                    short: 'inst',
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
                    short: 'vbr',
                    link: 'https://chats.viber.com/aviasales',
                }
            }
        }
    }
}
