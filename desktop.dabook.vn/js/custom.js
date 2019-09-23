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
scrollTopBtn = document.getElementById('scroll__top');
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
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

// ======DROPDOWN OUTER HIDER=======
$('.dropdown--outerhide > .dropdown-toggle').bind('click', function() {
  if ($('.dropdown-menu--outerhide').hasClass('hide')) {
    $('.dropdown-menu--outerhide')
      .addClass('show')
      .removeClass('hide');
  } else {
    $('.dropdown-menu--outerhide')
      .addClass('hide')
      .removeClass('show');
  }
});
$('.dropdown__close__btn').on('click',function(){
  $('.dropdown-menu--outerhide')
      .addClass('hide')
      .removeClass('show');
});
$(".dropdown-menu--outerhide").click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $(".dropdown-menu--outerhide") .addClass('hide')
  .removeClass('show');
});

// =============CHANGE GUEST QTY===================
function changeAdultByPlus(targetInputFrontId, targetInputId) {
  var targetInput = $(targetInputId);
  var currentValue = parseInt(targetInput.val());
  var targetInputFront = $(targetInputFrontId);
  targetInputFront.text(currentValue + 1);
  targetInput.val(currentValue + 1);
}
function changeAdultByMinus(targetInputFrontId, targetInputId) {
  var targetInput = $(targetInputId);
  var currentValue = parseInt(targetInput.val());
  if (currentValue === 0) {
    $(this).prop('disabled', true);
    return;
  } else {
    $(this).prop('disabled', false);
    var targetInputFront = $(targetInputFrontId);
    targetInputFront.text(currentValue - 1);
    targetInput.val(currentValue - 1);
  }
}
function computedTotalAdult(targetAdultId,adultId,childId,infantId){
  var total =parseInt($(adultId).val()) + parseInt($(childId).val()) + parseInt($(infantId).val());
  $(targetAdultId).text(total + ' hanh khach');
} 
$('#isearch__infant__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__infant--front', '#isearch__infant');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});
$('#isearch__infant__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__infant--front', '#isearch__infant');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});
$('#isearch__child__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__child--front', '#isearch__child');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});
$('#isearch__child__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__child--front', '#isearch__child');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});
$('#isearch__adult__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__adult--front', '#isearch__adult');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});
$('#isearch__adult__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__adult--front', '#isearch__adult');
  computedTotalAdult('#isearch__guest','#isearch__infant','#isearch__child','#isearch__adult');
});

$('#isearch__sticky__infant__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__sticky__infant--front', '#isearch__sticky__infant');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});
$('#isearch__sticky__infant__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__sticky__infant--front', '#isearch__sticky__infant');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});
$('#isearch__sticky__child__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__sticky__child--front', '#isearch__sticky__child');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});
$('#isearch__sticky__child__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__sticky__child--front', '#isearch__sticky__child');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});
$('#isearch__sticky__adult__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__sticky__adult--front', '#isearch__sticky__adult');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});
$('#isearch__sticky__adult__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__sticky__adult--front', '#isearch__sticky__adult');
  computedTotalAdult('#isearch__sticky__guest','#isearch__sticky__infant','#isearch__sticky__child','#isearch__sticky__adult');
});