$(document).ready(function() {
    // menu__burger
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // s2_about-company
    $('.slick-slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
    });


    $(window).on('load scroll', function() { 
        if ($(this).scrollTop() >= '1') {
            $('.header').css('background', 'rgba(255, 255, 255, .8)');
        } else {
            $('.header').css('background', 'none');
        }
    });
});