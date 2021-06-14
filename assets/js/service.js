$(function(){
    $('#appointment-accordion').accordionjs({
        activeIndex: false,
    });

    $('.specialists-slider').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4.3,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4.16,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4.35,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3.92,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.48,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 540,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.specialists-slider h4').matchHeight({
        byRow: false
    }); 
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
                    rows: 1,
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3.65,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3.6,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.5,
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

    $('.service .tabs li').on('click', function(){
        $('.service .tabs li').removeClass('active');
        $('.service-content .tab').removeClass('active-tab')
        $(this).addClass('active');
        
        let tab = $(this).attr('data-tab')
        console.log(tab)
        $('.service-content').find('.' + tab).addClass('active-tab')
    });
    
})