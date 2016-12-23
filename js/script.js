var menu = $(".js-navigation");
var menuTouchBtn = $(".js-burger");

menuTouchBtn.click(function(e) {
  e.preventDefault();
  menu.fadeToggle();
});

// На ширине больше 760пх меню открыто всегда
$(window).resize(function() {
  var wid = $(window).width();

  if (wid > 760 && menu.is(":hidden")) {
    menu.removeAttr("style");
  }

});

// === slcik.js ===
// https://github.com/kenwheeler/slick


$('#js-potfolio-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});


