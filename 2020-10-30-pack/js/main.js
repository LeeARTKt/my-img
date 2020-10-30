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

});