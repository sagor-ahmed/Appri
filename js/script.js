$(document).ready(function () {

    'use strict'

    /* ===== Testimonial Active ===== */


    $('.testimonial-img-active').slick({

        slidesToShow: 3,

        slidesToScroll: 1,

        asNavFor: '.testimonial-active',

        dots: false,

        centerMode: true,

        focusOnSelect: true,

        centerPadding: '0px',

        arrows: false,

        responsive: [{

                breakpoint: 1024,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 1,

                    infinite: true,

                    dots: false,

                }

    },

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 2

                }

    },

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

    },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

    }

    ]

    });


    $('.testimonial-active').slick({
        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: false,

        fade: true,

        asNavFor: '.testimonial-img-active',

    });


    /* Owl carousel */
    $('.brand-active').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            550: {
                items: 2,
            },

            767: {
                items: 3,
            },

            1000: {
                items: 4,
            }
        }
    });

    ////////////////////////////////////////////////////

    // Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });

    /* ===== Counter Up Plugin ==== */

    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    /* ===== Magnify popup ==== */
    $('.popup-video').magnificPopup({
        type: 'iframe'

    });


    /* one Page Nav */
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu').onePageNav({
        currentClass: "active",
        scrollOffset: top_offset,
    });

    /* == Mean menu === */

    $('#humberger-menu ').meanmenu({
        meanMenuContainer: ".humberger-menu",
        meanScreenWidth: "991"
    });


});

/*========== Javascript Codes ==========*/

//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(question);

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});



const navbar = document.getElementById("sticky-header");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    //setup back to top link


});



function openNav() {
    document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
    document.getElementById('myNav').style.width = "0%";
}
