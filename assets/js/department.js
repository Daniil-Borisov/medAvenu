$(function(){
    $('.faq-slider').slick({
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3.13,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3.25,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3.12,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3.2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                rows: 2,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
    $('.equipment-item .slider').slick({
        rows: 1,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
    });

    $('.department .tabs li').on('click', function(){
        $('.department .tabs li').removeClass('active');
        $('.subdepartment').removeClass('active-tab')
        $(this).addClass('active');
        let tab = $(this).attr('data-filter')
        console.log(tab)
        $('.department').find('.' + tab).addClass('active-tab')
        if(tab == 'all'){
            $('.subdepartment').addClass('active-tab')
        }
    });

    $('.content-tabs .tabs li').on('click', function(){
        $('.content-tabs .tabs li').removeClass('active');
        $('.content-tabs .tab').removeClass('active-tab')
        $(this).addClass('active');
        
        let tab = $(this).attr('data-tab')
        console.log(tab)
        $('.content-tabs').find('.' + tab).addClass('active-tab')
        $('.equipment-item .slider').slick('setPosition');
    });

    if($(window).width() >= 1024){
        $('.branches-content').slick({
            rows: 1,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 3.25,
            nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3.13,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3.25,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3.3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3.12,
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                  }
                }
            ]
        });

    }
})