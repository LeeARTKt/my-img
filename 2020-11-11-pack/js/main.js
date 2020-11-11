$(document).ready(function(){

    $(".menu > .main > ul > .menu1").mouseover(function(){
        $(".header > .menu_bg").addClass("active");
    });
    $(".menu > .main > ul > .menu1").mouseout(function(){
        $(".header > .menu_bg").removeClass("active");
    })

    $(".menu > .main > ul > .menu2").mouseover(function(){
        $(".header > .menu_bg").addClass("active");
    });
    $(".menu > .main > ul > .menu2").mouseout(function(){
        $(".header > .menu_bg").removeClass("active");
    })

    $(".menu > .main > ul > .menu3").mouseover(function(){
        $(".header > .menu_bg").addClass("active");
    });
    $(".menu > .main > ul > .menu3").mouseout(function(){
        $(".header > .menu_bg").removeClass("active");
    })

    $(".menu > .main > ul > .menu4").mouseover(function(){
        $(".header > .menu_bg").addClass("active");
    });
    $(".menu > .main > ul > .menu4").mouseout(function(){
        $(".header > .menu_bg").removeClass("active");
    });




    $('.visual> .slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      });


      $(".footer> .main> .family>li").click(function(){
          $(".footer> .main> .family> li>ul").toggleClass("active");
      });


      $(window).scroll(function(){
        $(this).scrollTop();
        console.log($(this).scrollTop());

        if($(this).scrollTop() > 300 ){
            $(".tap").css({opacity:1, visibility:"visible"});
        }else {
            $(".tap").css({opacity:0, visibility:"hidden"});
        }


      });

      $(".tap").click(function(){
        $("body, html").animate({scrollTop:0});

      });
});