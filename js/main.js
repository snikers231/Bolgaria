//slider - slick.js
$(document).ready(function(){
    $('.reviews__slider').slick({
        arrows: true,
        prevArrow: '.arrow__left',
        nextArrow: '.arrow__right',
        dots: true,
        dotsClass: 'reviews__dots'
    });
});

//modal  - iziModal.js
$(document).on('click', '.form-modal', function (event) {
    event.preventDefault();
    $('#modal-form').iziModal('open');
});
$('#modal-form').iziModal({
    headerColor: '#26A69A',
    width: '50%',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    fullscreen: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown',
});

//anchor!
$(document).ready(function () {
    $('.scroll-to-next a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
                duration: 1000,
                easing: 'swing'
            });
        return false;
    });
});

