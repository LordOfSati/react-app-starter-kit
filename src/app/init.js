/* global $ */
/* global WOW */
/* global window */
/* global history */
const init = function () {
    if (window.location.hash === '#_=_') {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split('#')[0])
            : window.location.hash = ''
    }
    $(document).ready(() => {
        $('.header').sticky({
            topSpacing: 0
        })
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 70
        })
        const wow = new WOW({
            mobile: false
        })
        wow.init()
    })
}
export default init
