$(function(){
    $('.about-doctor-content .text').showmore({
        closedHeight: 330,
        buttonTextMore: 'Читать больше',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5
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

    $('.diplomas-slider').slick({
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.about-doctor-content .tabs li').on('click', function(){
        $('.about-doctor-content .tabs li').removeClass('active');
        $('.about-doctor-content .tab').removeClass('active-tab')
        $(this).addClass('active');
        
        let tab = $(this).attr('data-tab')
        console.log(tab)
        $('.about-doctor-content').find('.' + tab).addClass('active-tab')
        $('.diplomas-slider').slick('setPosition');
    });

    if($(window).width() >= 1200){

        $('.publication-content').slick({
            rows: 1,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 3,
            nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                }
            ]
        });

    }

    
})