$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });



  //header slider
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //products slider
  var mySwiper2 = new Swiper('.comments-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '#comments .swiper-pagination',
      clickable: true,
    },
  });

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });


  
  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });


  $(".slide").on("click", function (e) {
    if (e.target.classList.contains('drop')) {
      console.log(e.target);
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    }
  });

    // timing start

    $('.countDown').each(function () {

      if (this.dataset.countdown == "true") {
  
        let t3 = Number($($(this).children('.hour')[0]).children('.t1')[0].innerHTML);
        let t2 = Number($($(this).children('.min')[0]).children('.t2')[0].innerHTML);
        let t1 = Number($($(this).children('.sec')[0]).children('.t3')[0].innerHTML);
        let that = this;
  
  
        var timinginterval = setInterval(function () {
  
          if (t1 > 1) {
            t1--;
  
          } else if (t1 == 1) {
            t1 = 59;
            if (t2 > 0) {
              t2--;
            } else if (t2 == 0) {
              t2 = 59;
              t3--;
            }
          }
          $($(that).children('.hour')[0]).children('.t1')[0].innerHTML = t3;
          $($(that).children('.min')[0]).children('.t2')[0].innerHTML = t2;
          $($(that).children('.sec')[0]).children('.t3')[0].innerHTML = t1;
        }, 1000);
      }
  
  
    });
  
  




});
