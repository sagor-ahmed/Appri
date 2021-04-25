$(document).ready(function () {

    'use strict'


    /* Owl carousel */



    $.scrollUp();



    $('.brand-active').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        margin: 30,
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
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: true,
            }
        }
    });

    /* 	
    $(".zoom-01").elevateZoom({constrainType:"height", constrainSize:274, zoomType: "lens", containLensZoom: true, gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: "active"}); 
     */


    /* ===== Counter Up Plugin ==== */

    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    /* ===== Magnify popup ==== */
    $('.popup-video').magnificPopup({
        type: 'iframe'

    });

    /* ===== Testimonial Active ===== */
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active',
        autoplay: false
    });


    $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: 'false',

        responsive: [

            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1
                }
  }
  ]
    });

    //SMOOTH SCROLL
    // $('.menu li a[href^="#"]').on('click', function(e){
    // e.preventDefault();

    // var target = $(this.hash);

    // if (target.length) {
    // $('html, body').stop().animate({
    // scrollTop: target.offset().top -60
    // }, 1000);
    // }

    // });

    /* ===== Wow Active ===== */
    new WOW().init();




    /* one Page Nav */
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu').onePageNav({
        currentClass: "active",
        scrollOffset: top_offset,
    });

    /* == Mean menu === */

    $('#humberger-menu').meanmenu({

        meanMenuContainer: ".humberger-menu",
        meanScreenWidth: "991",

    });




    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }

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
