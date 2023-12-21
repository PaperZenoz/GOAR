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
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                }
            }
        ]
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
                    arrows: false,
                }
            }
        ]
    })

    function counter() {
        var $dec = $('.product-view__decrement'),
            $inc = $('.product-view__increment'),
            $input = $('.product-view__counter-input')

        $dec.on('click', function () {

            if (parseFloat($input.val()) > 1) {
                $input.val(parseFloat($input.val()) - 1)
            }

        })

        $inc.on('click', function () {

            $input.val(parseFloat($input.val()) + 1)
        })
    }


    function review() {
        var $button = $('.product-view__info-header-item')

        $button.on('click', function () {
            var $index = $(this).index()

            $button.removeClass('active')
            $(this).addClass('active')
            $('.product-view__info-body').hide()
            $('.product-view__info-body').eq($index).show()

        })
    }


    function burger() {
        $('.header__burger').on('click', function () {
                $('.header__nav').toggle()
            })
    }

    counter()
    review()
    burger()
})
