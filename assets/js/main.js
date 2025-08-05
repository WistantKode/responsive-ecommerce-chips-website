let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
    menu.classList.toggle("move")
}


    var swiper = new Swiper(".categorySwiper", {
        // spaceBetween: 30,
        // centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          280: {
            slidesPerview: 1,
            spaceBetween: 10,
          },
          510: {
            slidesPerview: 2,
            spaceBetween: 10,
          },
          750: {
            slidesPerview: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPreview: 4,
            spaceBetween: 20,
          },
        }, 
    });

    var swiper = new Swiper(".selling-slider", {
        // spaceBetween: 30,
        // centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          280: {
            slidesPerview: 1,
            spaceBetween: 10,
          },
          510: {
            slidesPerview: 2,
            spaceBetween: 10,
          },
          750: {
            slidesPerview: 3,
            spaceBetween: 15,
          },
          920: {
            slidesPreview: 4,
            spaceBetween: 20,
          },
        }, 
    });


