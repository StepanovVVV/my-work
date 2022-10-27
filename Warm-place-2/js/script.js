// SLIDER
$('.our-work_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});
// SLIDER

// SLIDER-COUNTER
$('.our-work_slider').on('init relnit afterChange', function(event, slick, currentSlide, nextSlide) {
    let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
    $(".our-work_slider-counter").text(counter);
}); 
// SLIDER-COUNTER

// ABOUT_US-INFO
$(function(){
  $("#info-btn").click(function(){ 
      $("#info-company").toggleClass('active')
    });
});
// ABOUT_US-INFO

// MODAL-WINDOW
const btns = document.querySelectorAll('.header__btn, .section-one_btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});
// MODAL-WINDOW

// BURGER 
$('.header_burger').click(function(event) {
  $('.header_burger, .header_menu').toggleClass('active');
  $('body').toggleClass('lock');
});

$('.header_link').click(function(event) {
  $('.header_link, .header_menu').toggleClass('active');
});
// BURGER 