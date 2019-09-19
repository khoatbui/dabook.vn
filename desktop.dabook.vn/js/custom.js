// ==============INITIAL================
$('.owl__topdes').owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  merge: true,
  nav: true,
  dots: false,
  lazyLoad: true,
  responsive: {
    678: {
      mergeFit: true,
    },
    1000: {
      mergeFit: false,
    },
  },
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
});
$('.owl__favoritedes').owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  merge: true,
  nav: true,
  dots: false,
  lazyLoad: true,
  responsive: {
    678: {
      mergeFit: true,
    },
    1000: {
      mergeFit: false,
    },
  },
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
});
$('.owl__todaypro').owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  merge: true,
  nav: true,
  dots: false,
  autoplay: true,
  lazyLoad: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    678: {
      mergeFit: true,
    },
    1000: {
      mergeFit: false,
    },
  },
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
});
$('.owl__bookingbg').owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  merge: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    678: {
      mergeFit: true,
    },
    1000: {
      mergeFit: false,
    },
  },
});
$('.owl__favoritedeslist').owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  merge: true,
  nav: false,
  dots: false,
  lazyLoad: true,
  responsive: {
    678: {
      mergeFit: true,
    },
    1000: {
      mergeFit: false,
    },
  },
});

$('#booking__checkin').flatpickr({
  minDate: 'today',
  dateFormat: 'Y-m-d',
});
$('#booking__checkout').flatpickr({
  minDate: 'today',
  dateFormat: 'Y-m-d',
});
$('#booking__checkin__sticky').flatpickr({
  minDate: 'today',
  dateFormat: 'Y-m-d',
});
$('#booking__checkout__sticky').flatpickr({
  minDate: 'today',
  dateFormat: 'Y-m-d',
});

// ====SCROLL TOP==========
$(document).ready(function() {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
scrollTopBtn = document.getElementById('scroll__top');
bookingSticky = document.getElementById('icomponent__booking__sticky');
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
  if (
    bookingSticky != null &&
    (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700)
  ) {
    bookingSticky.style.display = 'block';
  } else {
    bookingSticky.style.display = 'none';
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ========CHANGE DATA MERGE ON HOVER========
$(document).ready(function() {
  const originWidth = $('.owl__topdes .owl-item').width();
  const rootOwlCarousel = $('.owl__topdes .owl-stage').width();
  $('.owl__topdes .owl-item').hover(
    function() {
      $('.owl__topdes .owl-item:not(:hover)').animate(
        { width: originWidth },
        400
      );
      $('.owl__topdes .owl-stage').width(rootOwlCarousel + originWidth);
      // $(this).width(originWidth * 2);
      if ($(this).width() == originWidth) {
        $(this).animate({ width: originWidth * 2 }, 400);
        $(this)
          .addClass('active')
          .removeClass('cloned');
      }
    },
    function() {
      // $(this)
      //   .prev()
      //   .width(originWidth * 2);
      // $(this).width(originWidth);
    }
  );
});
