$('.fist-section_slider').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  autoplaySpeed: 2000,
  autoplay: true
});

$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});