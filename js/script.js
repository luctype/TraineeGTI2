$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    //autoplay: true,
  });
});
