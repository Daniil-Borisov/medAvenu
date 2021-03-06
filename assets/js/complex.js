$(function(){
    $('.about-complex  .tabs li').on('click', function(){
        $('.about-complex  .tabs li').removeClass('active');
        $('.about-complex  .tab').removeClass('active-tab')
        $(this).addClass('active');
        
        let tab = $(this).attr('data-tab')
        console.log(tab)
        $('.about-complex ').find('.' + tab).addClass('active-tab')
        $('.tab .department .slider').slick('setPosition');
    });
    $('.tab .department .slider').slick({
        rows: 1,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
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
                    slidesToShow: 3,
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
                rows: 2,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
    
    if($(window).width() >= 1024){
        $('.reviews-content').slick({
            rows: 1,
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 3.2,
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
                        slidesToShow: 2,
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
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