$(document).ready(function() {
    // MENU-BURGER
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // MENU-BURGER
    
    // SLIDER_VORES-SLIDER
    $('.vores-slider__slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 647,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // SLIDER_VORES-SLIDER
});



