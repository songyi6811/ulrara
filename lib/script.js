$(function () {
    //menu
    $('.nav li:nth-child(2), .menu_bg').mouseover(function () {
        $(this).find('.depth02').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.depth02').stop().slideUp(500);
    });
    $('.nav li:nth-child(3), .menu_bg').mouseover(function () {
        $(this).find('.depth02').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.depth02').stop().slideUp(500);
    });

    //main_visual imgslide
    $('.main_visual a:gt(0)').hide();
    setInterval(function () {
        $('.main_visual a:first').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.main_visual');
    }, 3000);

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


    //lookbook swiper
    var swiper = new Swiper('.lookbook_slide', {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 150,
        loop: true,              //added                   
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });


    //best
    let menu = document.querySelectorAll('.best-nav .menu li');
    let itemWrap = document.querySelectorAll('.best .item_wrap');

    for(let i = 0; i < menu.length; i++) {
                
        menu[i].addEventListener('click', () => {
            console.log(i)

            menu.forEach(item01 => {
                item01.classList.remove('active');
            });
            menu[i].classList.add('active');

            itemWrap.forEach(item02 => {
                item02.classList.remove('active');
            });
            itemWrap[i].classList.add('active');
        });
    };





});//script end