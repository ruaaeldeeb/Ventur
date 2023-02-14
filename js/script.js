$(".one-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    780: {
      items: 3,
    },
    1100: {
      items: 4,
    },
  },
});
$("#two-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    780: {
      items: 2,
    },
    1100: {
      items: 3,
    },
  },
});

$("#computers-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    780: {
      items: 1,
    },
    1100: {
      items: 2,
    },
  },
});

$("#logos-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    780: {
      items: 4,
    },
    1100: {
      items: 6,
    },
  },
});

$("#hotdeals-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    780: {
      items: 2,
    },
    992: {
      items: 1,
    },
  },
});

$(".btn-sidebar").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});

$(".sidebar ul li a").click(function () {
  var id = $(this).attr("id");
  $("nav ul li ul.item-show-" + id).toggleClass("show");
  $("nav ul li #" + id + " span").toggleClass("rotate");
});

$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
