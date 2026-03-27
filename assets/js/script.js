// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';

  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  // featured post slider
  const featuredPostSlider = $(".featured-post-slider");
  featuredPostSlider.slick({
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    }]
  });

  featuredPostSlider.on('wheel', (function (e) {
    var slickObj = $(this).slick('getSlick');

    if (e.originalEvent.deltaY > 0) {
      if (slickObj.currentSlide < slickObj.slideCount - 1) {
        e.preventDefault();
        $(this).slick('slickNext');
      }
    } else {
      if (slickObj.currentSlide > 0) {
        e.preventDefault();
        $(this).slick('slickPrev');
      }
    }
  }));

  // venobox initialize
  $('.venobox').venobox();

})(jQuery);