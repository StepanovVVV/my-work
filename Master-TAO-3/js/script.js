$(document).ready(function() {
    // BURGER
    $(".header_burger").click(function(event) {
        $('.header_burger, .header_block').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header_link').click(function(event) {
      $('.header_link, .header_block').toggleClass('active');
    });
    // BURGER

    // SLIDER_SECTION-2
    $('.section_slider-info').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false
              }
            }
        ]
    });
    // SLIDER_SECTION-2

    // SLIDER_SECTION-4
    $('.delivery-options_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                
              }
            }
        ]
    });
    // SLIDER_SECTION-4

    // DOWNLOAD BUTTON
    window.onload = () => {
        
        const uploadFile = document.getElementById("upload-file");
        const uploadBtn = document.getElementById("upload-btn");
        const uploadText = document.getElementById ("upload-text");

        uploadFile.addEventListener("change", function() {
            if(uploadFile.value) {
                uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
            }else {
                uploadText.innerText = "Файл не выбран";
            }
        });
    }
    // DOWNLOAD BUTTON

    // SLIDER_CHOOSE-US ---- MOBILE
    $('.choose-us_info-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false
              }
            }
        ]
    });
    // SLIDER_CHOOSE-US ---- MOBILE
});

