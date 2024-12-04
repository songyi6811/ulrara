$(function(){
    //menu
    $('.nav li:nth-child(2), .menu_bg').mouseover(function(){
        $(this).find('.depth02').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.depth02').stop().slideUp(500);
    });
    $('.nav li:nth-child(3), .menu_bg').mouseover(function(){
        $(this).find('.depth02').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.depth02').stop().slideUp(500);
    });

    //main_visual imgslide
    $('.main_visual a:gt(0)').hide();
    setInterval(function(){
        $('.main_visual a:first').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.main_visual');
    },3000);
    
    //new-arrivals swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        autoplay: {
            delay: 2500, //=2.5초  //1000 = 1초
            disableOnInteraction: false, //슬라이드 드래그 후 자동슬라이드 구현
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });



});//script end