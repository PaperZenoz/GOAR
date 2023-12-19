$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});



$(document).ready(function() {
$('.product-view__slider-core').slick()
    $('.product-view__slider-pagination').slick({
        slidesToShow: 3
    })
})
