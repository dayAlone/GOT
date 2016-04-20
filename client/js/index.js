import 'social-likes-next'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import { throttle } from 'lodash'

let isScrollTriggered = false

let reachGoal = (event, category = '') => {
    let go = (ev) => {
        console.log(ev)
        window.yaCounter36899425.reachGoal(ev)
        window.ga('send', 'event', category, ev)
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
    prevArrow: '<svg class="slick-prev"><use xlink:href="#arrow.left"/></svg>',
    nextArrow: '<svg class="slick-next"><use xlink:href="#arrow.right"/></svg>'
})

$('.header__mouse').on('click', function (e) {
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

$('[data-event]').on('click', e => {
    let el = $(e.currentTarget)
    reachGoal(el.data('event'), el.data('event-category'))
})

if (module.hot) module.hot.accept()
