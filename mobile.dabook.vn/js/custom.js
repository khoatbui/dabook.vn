// ==============INITIAL================
$('.owl__topdes').owlCarousel({
  items: 2,
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
  items: 2,
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
  items: 2,
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


// ======RANGE=========

// Without JQuery
var slider__departure__checkin = new Slider('#ideparture__checkin__time', {tooltip: 'always'});
slider__departure__checkin.on("slide", function(sliderValue) {
	document.getElementById("ideparture__checkin__value").textContent = moment(sliderValue[0].toString(),"HH").format('HH:mm') + ' - ' + moment(sliderValue[1].toString(),"HH").format('HH:mm');;
});
var slider__departure__checkout = new Slider('#ideparture__checkout__time', {tooltip: 'always'});
slider__departure__checkout.on("slide", function(sliderValue) {
	document.getElementById("ideparture__checkout__value").textContent = moment(sliderValue[0].toString(),"HH").format('HH:mm') + ' - ' + moment(sliderValue[1].toString(),"HH").format('HH:mm');;
});
var slider__arrived__checkin = new Slider('#iarrived__checkin__time', {tooltip: 'always'});
slider__arrived__checkin.on("slide", function(sliderValue) {
	document.getElementById("iarrived__checkin__value").textContent = moment(sliderValue[0].toString(),"HH").format('HH:mm') + ' - ' + moment(sliderValue[1].toString(),"HH").format('HH:mm');;
});
var slider__arrived__checkout = new Slider('#iarrived__checkout__time', {tooltip: 'always'});
slider__arrived__checkout.on("slide", function(sliderValue) {
	document.getElementById("iarrived__checkout__value").textContent = moment(sliderValue[0].toString(),"HH").format('HH:mm') + ' - ' + moment(sliderValue[1].toString(),"HH").format('HH:mm');
});
var slider__filter__price = new Slider('#i__filter__price', {tooltip: 'always'});
slider__filter__price.on("slide", function(sliderValue) {
	document.getElementById("i__filter__price__value").textContent =new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sliderValue[0]) + ' - ' + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sliderValue[1]);
});