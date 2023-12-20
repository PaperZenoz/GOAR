$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {

    $('.product-view__slider-pagination').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        vertical: true,
        asNavFor: '.product-view__slider-core',
        focusOnSelect: true
    })
    $('.product-view__slider-core').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        asNavFor: '.product-view__slider-pagination',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                }
            }
        ]
    })


})
