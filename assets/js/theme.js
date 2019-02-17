function slickHeight() {
    var winWidth = $(window).width();
    if (winWidth > 767) {
        var sliderHeight = $('.slick-slider').height();
        console.log(sliderHeight);
        $('#slick-pager .slick-pager').css('height', sliderHeight - 60);
    }
}
$(window).resize(function () {
    slickHeight();
});


jQuery(document).ready(function ($) {


    // make bootstrap modal draggable

    //menu toggle
    // $('#sidebarCollapse').on('click', function () {
    //     $('div#collapsibleNavbar').toggleClass('nav-view');
    // });

    //slick slider 

    $('.featuredPostSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrow: true,
        draggable: true,
        initialSlide: 4,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        autoplay: false,
        adaptiveHeight: false,
        asNavFor: '.slick-pager'
    });
    $('.slick-pager').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: '.featuredPostSlider',
        focusOnSelect: true,
        vertical: true,
        initialSlide: 4,
        responsive: [{
            breakpoint: 767,
            settings: {
                vertical: false
            }
        }]
    });
    slickHeight();
});