(function ($) {
    "use strict";

    // Spinner
    setTimeout(function () {
        if ($('#spinner').length) {
            $('#spinner').removeClass('show');
        }
    }, 1);

    // WOW init
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }

    // =========================
    // NAVBAR (CLEAN FIX)
    // =========================

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // REMOVE Bootstrap sticky-top conflict (IMPORTANT)
    $(".navbar").removeClass("sticky-top");

    // =========================
    // DROPDOWN (FIXED LOGIC)
    // =========================

    const dropdowns = document.querySelectorAll(".dropdown");

    function isDesktop() {
        return window.innerWidth >= 992;
    }

    function setupDropdowns() {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector(".dropdown-menu");

            if (!menu) return;

            if (isDesktop()) {
                dropdown.addEventListener("mouseenter", () => {
                    menu.classList.add("show");
                });

                dropdown.addEventListener("mouseleave", () => {
                    menu.classList.remove("show");
                });
            } else {
                menu.classList.remove("show");
            }
        });
    }

    setupDropdowns();

    window.addEventListener("resize", setupDropdowns);

    // =========================
    // COUNTER
    // =========================

    if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: { items: 2 },
            576: { items: 4 },
            768: { items: 6 },
            992: { items: 8 }
        }
    });

})(jQuery);