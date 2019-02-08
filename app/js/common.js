$( document ).ready(function() {
    preloader();//Fade preloader when page loaded
    easySlider();
    mediaQueries();

    var testimonialsProps = {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/svg/arrow-prev.svg" alt="img"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/svg/arrow-next.svg" alt="img"></button>'
    };
    initSlick($('.testimonials__items'), testimonialsProps);
    lazyScroll($('.header'),700);
    lazyScrollFade($('.btn-up'), 100);
    fadeMenu();
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

function initSlick(slider, props) {
    slider.slick(props);
}

function mediaQueries(){
    easySlider();
    $( window ).resize(function() {
        easySlider();
    });
}


function lazyScrollFade(anchor, speed) {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 350) {
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

function mmenuToggle(menu, icon){
    var $menu = menu.mmenu({
        "extensions": [
            "position-left",
            "theme-white",
        ]
    });
    var $icon = icon;
    var api = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        api.open();
    });
    api.bind( "open:start", function() {
        $('body').addClass('menu-open');
    });
    api.bind( "open:finish", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 100);
        $icon.on( "click", function() {
            api.close();
        });
    });
    api.bind( "close:finish", function() {
        $('body').removeClass('menu-open');
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 100);
        $icon.on( "click", function() {
            api.open();
        });
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