$(document).ready(function(){


    $(window).scroll(function(){

        $(this).scrollTop();
        if($(this).scrollTop() > 200 ){
          $(".header> .bg> .bg_white").css({  background:"rgba(255, 255, 255, 0.9)"});
          $(".header> .bg> .bg_white").css({  height:"70px"});
          $(".header> .logo").addClass("active");
          $(".header> .logo").css({ "margin-top":"8px"});
          $(".header> .menu> ul> li> a").css({color: "#555"});
          $(".header> .menu").css({ "margin-top":"30px"});



        } else {
          $(".header> .bg> .bg_white").css({  background:"rgba(255, 255, 255, 0)"})
          $(".header> .bg> .bg_white").css({  height:"80px"});
          $(".header> .logo").removeClass("active");
          $(".header> .logo").css({ "margin-top":"15px"});
          $(".header> .menu> ul> li> a").css({color: "#fff"});
          $(".header> .menu").css({ "margin-top":"40px"});



         }
  
  
      });

      $('.visual> .slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      });

      $('.notice> .main> ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical : true
      });


});