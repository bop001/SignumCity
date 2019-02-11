$( document ).ready(function() {
    preloader();//Fade preloader when page loaded
    easySlider();
    testimonialsSlider();
    mediaQueries();
    lazyScroll($('.socials'),700);
    lazyScrollFade($('.btn-up'), 500);
    fadeMenu();
    lazyScrollSection($('.header__link'), 500);
    lazyScrollSection($('.footer__link'), 500);
    new WOW().init();

    var formSend = {
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "../php/des-form.php",
                data: $(form).serialize(),
                success: function(){
                    $.fancybox.open($('.congrats'));
                },
                error: function() {
                    alert('Yops')
                }
            });
        }
    };

     validation($('.form-send-laptop'), formSend );
     validation($('.form-send-easy'), formSend );
     validation($('.form-send-people'), formSend );


    $('#congrats-close').on('click', function () {
        $.fancybox.close($('.congrats'));
    });

});


// functions -------------------------------------------

function preloader () {
    $(window).on('load', function () {
        $('.loader-outer').fadeOut();
    });
}
function easySlider() {
    var easyProps = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    var slider = $('.easy-money__item-outer');
    if ($(window).width() < 1025) {
        if (slider.hasClass('slick-slider')) {
            slider.slick('unslick');
        }
        initSlick(slider, easyProps);
    } else {
        if (slider.hasClass('slick-slider')) {
            slider.slick('unslick');
        }
    }
}
function testimonialsSlider() {
    var testimonialsProps = {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg class="arow" width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M28.8136 46.1335L7.68012 25L28.8136 3.86653L25 0L4.00543e-05 25L25 50L28.8136 46.1335Z" fill="#29C5D4"/>\n' +
            '</svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="arow" width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0 46.1335L21.1335 25L0 3.86653L3.81356 0L28.8136 25L3.81356 50L0 46.1335Z" fill="#29C5D4"/>\n' +
            '</svg></button>'
    };

    var slider = $('.testimonials__items');
    if ($(window).width() > 0) {
        if (slider.hasClass('slick-slider')) {
            slider.slick('unslick');
        }
        initSlick(slider, testimonialsProps);
    } else {
        if (slider.hasClass('slick-slider')) {
            slider.slick('unslick');
        }
    }
}

function initSlick(slider, props) {
    slider.slick(props);
}

function mediaQueries(){
    easySlider();
    $( window ).resize(function() {
        easySlider();
        testimonialsSlider();
    });
}


function lazyScrollFade(anchor, speed) {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 950) {
            anchor.fadeIn();
        }else{
            anchor.fadeOut();
        }
    });
    anchor.on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(href).offset().top}, speed);
    });
}
function lazyScroll(anchor, speed) {
    anchor.on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(href).offset().top}, speed);
    });
}
function fadeMenu() {
    $('.header__menu').on('click', function () {
       $('.header__wrapper-mob').fadeIn();
    });
    $('.header-mob__link_close').on('click', function () {
        $('.header__wrapper-mob').fadeOut();
    });
}
function validation(form, props ){
    form.validate(props);
}
function lazyScrollSection(anchor, speed) {
    anchor.on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(href).offset().top}, speed);
    });
}



