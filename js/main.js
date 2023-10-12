$(document).ready(function(){

  // TRANDS SLIDER
    $('.center').slick({
        centerMode: true,
        slidesToShow: 1.5,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      })

    //INNVOTE PRODUCT SLIDER
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        centerMode: true
    });

    $('.bottom-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
      adaptiveHeight: true,
      responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                ,
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
               
            ],
    
    });
    $('.bottom-slider1').slick({
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
        },
        ,
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
        },
      ]
    });
      
    // STORIES VIDEO SLIDER
    $('.autoplay').slick({
        slidesToShow: 1.5,
        arrows: true,
        padding: 20,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          }
        ]
    });

    // $('.btn-close').click(function(){      
    //   $('source').attr('src', $('source').attr('src'));
    // }); 
    // $("#exampleModal1").on('hidden.bs.modal', function (e) {
    //   $("#exampleModal1 source").attr("src", $("#exampleModal1 source").attr("src"));
    // });

    // setTimeout(function(){
    //   document.getElementById('vid').play();
    // },1000);

    // $('body').on('hidden.bs.modal', '.modal', function () {
    //   $('video').attr("src", $("#exampleModal source").attr("src"));
    // });

    // $('body').on('hidden.bs.modal', '.modal', function () {
    //   $('video').attr("src", $("#exampleModal1 source").attr("src"));
    // });

    // $('body').on('hidden.bs.modal', '.modal', function () {
    //   $('video').attr("src", $("#exampleModal2 source").attr("src"));
    // });

    // $('body').on('hidden.bs.modal', '.modal', function () {
    //   $('video').attr("src", $("#exampleModal3 source").attr("src"));
    // });
 

          
});