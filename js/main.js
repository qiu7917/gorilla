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
    footer高さ
===================================================*/

$(window).on("scroll resize", function () {
    if (window.innerWidth <= 850) {
        let ctaHeight = $(".fixedbtn").outerHeight();
        if ($(".fixedbtn").is(":visible")) {
            $("footer").css("padding-bottom", ctaHeight + "px");
        } else {
            $("footer").css("padding-bottom", "20px");
        }

    } else {
        $("footer").css("padding-bottom", "");
    }
});


/*=================================================
    nav activeカラー
===================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll(
        '.pc_nav ul li a[href^="#"]'
    );

    const sections = Array.from(navLinks)
        .map(link => {
            const target = document.querySelector(
                link.getAttribute('href')
            );
            return target ? { link, target } : null;
        })
        .filter(Boolean);

    function updateActiveNav() {
        const activationLine = window.innerHeight * 0.1;
        const activeSections = sections.filter(({ target }) => {
            const rect = target.getBoundingClientRect();
            return rect.top <= activationLine &&
                rect.bottom > activationLine;
        });

        activeSections.sort((a, b) => {
            return b.target.getBoundingClientRect().top -
                a.target.getBoundingClientRect().top;
        });

        navLinks.forEach(link => {
            link.classList.remove('is-active');
        });

        if (activeSections.length > 0) {
            activeSections[0].link.classList.add('is-active');
        }
    }

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('resize', updateActiveNav);
    updateActiveNav();
});


