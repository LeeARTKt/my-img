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




        //  if($(this).scrollTop() > 0 ){
        //   $(".section1> .main> .box> .boxA").css({ "margin-top": "20px" });
        //   $(".section1> .main> .box> .boxA").css({ "opacity": "1" });

        //   $(".section1> .main> .box> .boxB").css({ "margin-top": "50px" });
        //   $(".section1> .main> .box> .boxB").css({ "opacity": "1" });
        // } else {
        //  }



         if($(this).scrollTop() > 330 ){
          $(".section2> .main> .box> .box1").css({ "opacity": "1" });
          $(".section2> .main> .box> .box1").css({ "margin-top": "0px" });

        } else {
          $(".section2> .main> .box> .box1").css({ "opacity": "0"});
          $(".section2> .main> .box> .box1").css({ "margin-top": "-30px" });
         }

         if($(this).scrollTop() > 350 ){
          $(".section2> .main> .box> .box2").css({ "opacity": "1" });
          $(".section2> .main> .box> .box2").css({ "margin-top": "0px" });

        } else {
          $(".section2> .main> .box> .box2").css({ "opacity": "0"});
          $(".section2> .main> .box> .box2").css({ "margin-top": "-60px" });
         }

         if($(this).scrollTop() > 370 ){
          $(".section2> .main> .box> .box3").css({ "opacity": "1" });
          $(".section2> .main> .box> .box3").css({ "margin-top": "0px" });

        } else {
          $(".section2> .main> .box> .box3").css({ "opacity": "0"});
          $(".section2> .main> .box> .box3").css({ "margin-top": "-90px" });
         }



         

         if($(this).scrollTop() > 1670 ){
          $(".section4> .main> .border").css({ "left": "-550px" });
          $(".section4> .main> .border").css({ "opacity": "1" });

        } else {
          $(".section4> .main> .border").css({ "left": "-1000px" });
          $(".section4> .main> .border").css({ "opacity": "0" });
         }




         if($(this).scrollTop() > 2400 ){
          $(".section5> .main> .txt").css({ "opacity": "1" });
          $(".section5> .main> .txt").css({ "margin-top": "125px" });

        } else {
          $(".section5> .main> .txt").css({ "opacity": "0"});
          $(".section5> .main> .txt").css({ "margin-top": "100px" });
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

      $(window).scroll(function(){
        $(this).scrollTop();
        console.log($(this).scrollTop());

        if($(this).scrollTop() > 300 ){
            $(".top_btn").css({opacity:1, visibility:"visible"});
        }else {
            $(".top_btn").css({opacity:0, visibility:"hidden"});
        }


      });

      $(".top_btn").click(function(){
        $("body, html").animate({scrollTop:0});

      });


});