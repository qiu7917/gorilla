$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".sec04-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });

    $(".sec07-slider").slick({
        autoplay: false,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });




    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    $('.accordion-header').on('click', function () {
        var $header = $(this);
        var $item = $header.parent();
        var $content = $header.next('.accordion-content');
        var $slider = $header.closest('.slick-slider');

        if ($header.hasClass('is-active')) {
            $header.removeClass('is-active');
            $item.removeClass('is-open-padding');
            $content.slideUp(200, function () {
                if ($slider.length) {
                    $slider.slick('setPosition');
                }
            });
        } else {
            $header.addClass('is-active');
            $item.addClass('is-open-padding');
            $content.slideDown(400, function () {
                if ($slider.length) {
                    $slider.slick('setPosition');
                }
                var $iframe = $content.find('iframe');
                if ($iframe.length && !$iframe.attr('src')) {
                    $iframe.attr('src', $iframe.data('src'));
                }
            });
        }
    });

    $('.accordion-content img').on('click', function () {
        $(this).closest('.accordion-content').prev('.accordion-header').click();
    });


    /*=================================================
    fixedbtn
    ===================================================*/

    $(function () {
        let cta = $(".fixedbtn");
        cta.hide();

        $(window).scroll(function () {
            let scrollThreshold = 500;
            if ($(window).scrollTop() > scrollThreshold) {
                cta.fadeIn();
            } else {
                cta.fadeOut();
            }
        });
    });
});


/*=================================================
    nav activeカラー
===================================================*/

$(window).on("scroll resize", function () {
    if (window.innerWidth <= 768) {
        let ctaHeight = $(".fixedbtn").outerHeight();
        ($(".fixedbtn").is(":visible"))
        $("footer").css("padding-bottom", ctaHeight + "px");

    } else {
        $("footer").css("padding-bottom", "84px");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.pc_nav ul li a[href^="#"]');

    const observerOptions = {
        root: null, 
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${targetId}`) {
                        link.classList.add('is-active');
                    } else {
                        link.classList.remove('is-active');
                    }
                });
            }
        });
    }, observerOptions);

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetSection = document.querySelector(href);
        if (targetSection) {
            observer.observe(targetSection);
        }
    });
});

