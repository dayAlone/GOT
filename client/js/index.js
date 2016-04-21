import 'social-likes-next'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import { throttle } from 'lodash'

let isScrollTriggered = false

let reachGoal = (event, category = '', r = '') => {
    let go = (ev) => {
        console.log(ev)
        if (window.yaCounter36899425) window.yaCounter36899425.reachGoal(ev)
        if (window.ga) window.ga('send', { hitType: 'event', eventCategory: category, eventAction: ev, params: r })
        if (window.mamka) window.mamka('send_event', { name: ev, meta: category })
    }
    if (Array.isArray(event)) event.map(el => (go(el)))
    else go(event)

}

let checkScroll = () => {
    if ($(window).scrollTop() + $(window).height() >= $('html').height()) {
        if (!isScrollTriggered) {
            isScrollTriggered = true
            reachGoal('Scrolling_down', 'Scrolling')
            $(window).off('scroll')
        }
    }
}

$(window).on('scroll', throttle(checkScroll, 100))

$('.slider').slick({
    fade: true,
    infinity: true,
    autoplay: true,
    prevArrow: '<svg class="slick-prev"><use xlink:href="#arrow.left"/></svg>',
    nextArrow: '<svg class="slick-next"><use xlink:href="#arrow.right"/></svg>'
})


$('.header__mouse, .icon:nth-child(3)').on('click', function (e) {
    $('html, body').stop().animate({ scrollTop: $('.block--countries').offset().top - 50 }, '500', 'swing')
    e.preventDefault()
})

$('.country__spoiler').click(e => {
    $(e.currentTarget).addClass('country__spoiler--hidden')
    reachGoal('Spoiler')
    e.preventDefault()
})

let country = $('body').data('country')
if (country) {
    $('html, body').stop().animate({ scrollTop: $(`.country:nth-child(${country + 1})`).offset().top }, '500', 'swing')
}

$('a.share').on('click', e => {
    if ($(e.currentTarget).parents('.footer').length === 0) e.preventDefault()
})

$('[data-event]').on('click', e => {
    let el = $(e.currentTarget)
    reachGoal(el.data('event'), el.data('event-category'))
})



if (module.hot) module.hot.accept()
