$(document).ready(function() {
    // MENU-BURGER
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // MENU-BURGER

    // SLIDER_UNSPLASH
    $('.unsplash__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1915,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1562,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1162,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 777,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
            }
        }
        ]
    });
    // SLIDER_UNSPLASH

    // SLIDER_ENJOY
    $('.enjoy__slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
            }
        }]
    });
    // SLIDER_ENJOY
});

