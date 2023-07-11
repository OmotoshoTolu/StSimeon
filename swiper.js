var swiper = new Swiper(".program", {
    loop: true,
    spaceBetween: 30,
    // effect: "fade",
    cssMode: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});
