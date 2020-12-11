$(function(){      // Фиксированное меню
    var h_hght = 200; // высота шапки
    var h_mrg = 0;    // отступ когда шапка уже не видна
    var elem = $('nav');
    var top = $(this).scrollTop();
    var navWrapSticky =  $('.nav_wrapper');
    if(top >= h_hght){
        elem.css('top', h_mrg);
    }
    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top <= h_hght) {
            elem.removeClass( 'nav_sticky');
            navWrapSticky.removeClass( 'nav_wrap_sticky');
            elem.css('top', (h_hght-top));
        } else {
            elem.addClass( 'nav_sticky');
            navWrapSticky.addClass( 'nav_wrap_sticky');
            elem.css('top', h_mrg);
        }
    });
});

$(function(){   // Функция анимации чисел
    var show = true;
    var countbox = ".experience_wrapper";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.experience_number').css('opacity', '1');
            $('.experience_number').spincrement({
                duration: 3000
            });

            show = false;
        }
    });
});

$(document).ready(function() {
    $('.gallery').magnificPopup({    //галерея фотографий
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            verticalFit: true
        },
        zoom: {       // элемент увеличивается из своего расположения и возвращается в свое расположение на основной странице
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.reviews_slider').slick({    //слайдер отзывов
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        cssEase: 'linear'
    });
    $('.caption_slider').slick({  //слайдер из двух фото для баннера на главной странице
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
