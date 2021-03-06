// ==============INITIAL================
$('.owl__topdes').owlCarousel({
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
  items: 1,
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

// ========DATETIME PICKER=================
var booking__checkin = flatpickr('#booking__checkin', {
  minDate: 'today',
  dateFormat: 'Y-m-d',
  inline: true,
  nextArrow: '<i class="fas fa-chevron-right" style="color:#FFF"></i>',
  prevArrow: '<i class="fas fa-chevron-left" style="color:#FFF"></i>',
  onChange: function(selectedDates, dateStr, instance) {
    booking__checkin__sticky.setDate(selectedDates, true, 'Y-m-d');
    booking__checkout.set(
      'minDate',
      flatpickr.formatDate(new Date(selectedDates), 'Y-m-d')
    );
  },
});

var booking__checkout = flatpickr('#booking__checkout', {
  mode: 'range',
  minDate: 'today',
  dateFormat: 'Y-m-d',
  inline: true,
  nextArrow: '<i class="fas fa-chevron-right" style="color:#FFF"></i>',
  prevArrow: '<i class="fas fa-chevron-left" style="color:#FFF"></i>',
  onChange: function(selectedDates, dateStr, instance) {
    booking__checkout__sticky.setDate(selectedDates, true, 'Y-m-d');
  },
});
var booking__birthday = flatpickr('#booking__birthday', {
  dateFormat: 'Y-m-d',
  inline: true,
  nextArrow: '<i class="fas fa-chevron-right" style="color:#FFF"></i>',
  prevArrow: '<i class="fas fa-chevron-left" style="color:#FFF"></i>',
});
var booking__checkin__sticky = flatpickr('#booking__checkin__sticky', {
  minDate: 'today',
  dateFormat: 'Y-m-d',
  onClose: function(selectedDates, dateStr, instance) {
    booking__checkin.setDate(selectedDates, true, 'Y-m-d');
    booking__checkout__sticky.set(
      'minDate',
      flatpickr.formatDate(new Date(selectedDates), 'Y-m-d')
    );
  },
});
var booking__checkout__sticky = flatpickr('#booking__checkout__sticky', {
  minDate: 'today',
  dateFormat: 'Y-m-d',
  onClose: function(selectedDates, dateStr, instance) {
    booking__checkout.setDate(selectedDates, true, 'Y-m-d');
  },
});
var booking__checkin__relative = flatpickr('#booking__checkin__relative', {
  minDate: 'today',
  dateFormat: 'Y-m-d',
  onChange: function(selectedDates, dateStr, instance) {
    booking__checkout__relative.set(
      'minDate',
      flatpickr.formatDate(new Date(selectedDates), 'Y-m-d')
    );
  },
});
var booking__checkout__relative = flatpickr('#booking__checkout__relative', {
  minDate: $('#booking__checkout').val(),
  dateFormat: 'Y-m-d',
});

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
$('.dropdown__close__btn').on('click', function() {
  $('.dropdown-menu--outerhide')
    .addClass('hide')
    .removeClass('show');
});
$('.dropdown-menu--outerhide').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.dropdown-menu--outerhide')
    .addClass('hide')
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
function changeAdultByMinus(targetInputFrontId, targetInputId, minimumValue) {
  var targetInput = $(targetInputId);
  var currentValue = parseInt(targetInput.val());
  if (currentValue === minimumValue) {
    $(this).prop('disabled', true);
    return;
  } else {
    $(this).prop('disabled', false);
    var targetInputFront = $(targetInputFrontId);
    targetInputFront.text(currentValue - 1);
    targetInput.val(currentValue - 1);
  }
}
function computedTotalAdult(targetAdultId, adultId, childId, infantId) {
  var total =
    parseInt($(adultId).val()) +
    parseInt($(childId).val()) +
    parseInt($(infantId).val());
  $(targetAdultId).text(total + ' hanh khach');
}
function syncAdult(targetInputFrontId, targetInputId, syncSourceId) {
  var syncValue = parseInt($(syncSourceId).val());
  $(targetInputId).val(syncValue);
  $(targetInputFrontId).text(syncValue);
}
$('#isearch__infant__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__infant--front', '#isearch__infant', 0);
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__infant--front',
    '#isearch__sticky__infant',
    '#isearch__infant'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
$('#isearch__infant__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__infant--front', '#isearch__infant');
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__infant--front',
    '#isearch__sticky__infant',
    '#isearch__infant'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
$('#isearch__child__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__child--front', '#isearch__child', 0);
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__child--front',
    '#isearch__sticky__child',
    '#isearch__child'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
$('#isearch__child__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__child--front', '#isearch__child');
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__child--front',
    '#isearch__sticky__child',
    '#isearch__child'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
$('#isearch__adult__btnminus').on('click', function() {
  changeAdultByMinus('#isearch__adult--front', '#isearch__adult', 1);
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__adult--front',
    '#isearch__sticky__adult',
    '#isearch__adult'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
$('#isearch__adult__btnplus').on('click', function() {
  changeAdultByPlus('#isearch__adult--front', '#isearch__adult');
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
  syncAdult(
    '#isearch__sticky__adult--front',
    '#isearch__sticky__adult',
    '#isearch__adult'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
});
// ----------------------

$('#isearch__sticky__infant__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__sticky__infant--front',
    '#isearch__sticky__infant',
    0
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__infant--front',
    '#isearch__infant',
    '#isearch__sticky__infant'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});
$('#isearch__sticky__infant__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__sticky__infant--front',
    '#isearch__sticky__infant'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__infant--front',
    '#isearch__infant',
    '#isearch__sticky__infant'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});
$('#isearch__sticky__child__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__sticky__child--front',
    '#isearch__sticky__child',
    0
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__child--front',
    '#isearch__child',
    '#isearch__sticky__child'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});
$('#isearch__sticky__child__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__sticky__child--front',
    '#isearch__sticky__child'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__child--front',
    '#isearch__child',
    '#isearch__sticky__child'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});
$('#isearch__sticky__adult__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__sticky__adult--front',
    '#isearch__sticky__adult',
    1
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__adult--front',
    '#isearch__adult',
    '#isearch__sticky__adult'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});
$('#isearch__sticky__adult__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__sticky__adult--front',
    '#isearch__sticky__adult'
  );
  computedTotalAdult(
    '#isearch__sticky__guest',
    '#isearch__sticky__infant',
    '#isearch__sticky__child',
    '#isearch__sticky__adult'
  );
  syncAdult(
    '#isearch__adult--front',
    '#isearch__adult',
    '#isearch__sticky__adult'
  );
  computedTotalAdult(
    '#isearch__guest',
    '#isearch__infant',
    '#isearch__child',
    '#isearch__adult'
  );
});

// ----------------------

$('#isearch__relative__infant__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__relative__infant--front',
    '#isearch__relative__infant',
    0
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});
$('#isearch__relative__infant__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__relative__infant--front',
    '#isearch__relative__infant'
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});
$('#isearch__relative__child__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__relative__child--front',
    '#isearch__relative__child',
    0
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});
$('#isearch__relative__child__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__relative__child--front',
    '#isearch__relative__child'
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});
$('#isearch__relative__adult__btnminus').on('click', function() {
  changeAdultByMinus(
    '#isearch__relative__adult--front',
    '#isearch__relative__adult',
    1
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});
$('#isearch__relative__adult__btnplus').on('click', function() {
  changeAdultByPlus(
    '#isearch__relative__adult--front',
    '#isearch__relative__adult'
  );
  computedTotalAdult(
    '#isearch__relative__guest',
    '#isearch__relative__infant',
    '#isearch__relative__child',
    '#isearch__relative__adult'
  );
});

function selectLocation(triggerButton, siblingElementId, targetInputId) {
  var selectLocationValue = triggerButton
    .parent()
    .prev()
    .text()
    .trim();
  $(targetInputId).val(selectLocationValue);
}

$('.select__sticky__departure__btn').on('click', function() {
  selectLocation(
    $(this),
    '.departure__sticky__item',
    '#booking__sticky__departure'
  );
  selectLocation($(this), '.departure__sticky__item', '#booking__departure');
});
$('.select__sticky__arrived__btn').on('click', function() {
  selectLocation(
    $(this),
    '.arrived__sticky__item',
    '#booking__sticky__arrived'
  );
  selectLocation($(this), '.arrived__sticky__item', '#booking__arrived');
});
$('.select__departure__btn').on('click', function() {
  selectLocation($(this), '.departure__item', '#booking__sticky__departure');
  selectLocation($(this), '.departure__item', '#booking__departure');
});
$('.select__arrived__btn').on('click', function() {
  selectLocation($(this), '.arrived__item', '#booking__sticky__arrived');
  selectLocation($(this), '.arrived__item', '#booking__arrived');
});

// ============BACK HISTORY=============
function back() {
  window.history.back();
}
$('.back__btn').on('click', back);
$('.nav__flight').on('click', function() {
  window.location.href = 'search.html';
});
$('.search__btn').on('click', function() {
  window.location.href = 'booking.html';
});
// $('.select__departure__btn').on('click', function(event) {
//   window.location.href = 'booking_return.html';
//   event.preventDefault()
// });
$('.result__departure__item').on('click', function() {
  window.location.href = 'booking_return.html';
});
$('.select__return__btn').on('click', function() {
  window.location.href = 'confirm.html';
});
$('.result__arrived__item').on('click', function() {
  window.location.href = 'confirm.html';
});
$('.payment__btn').on('click', function() {
  window.location.href = 'payment.html';
});
$('.finish__btn').on('click', function() {
  window.location.href = 'finish.html';
});

$('.detailmodal__btn').on('click', function() {
  $('#booking__detailticket__modal').modal('show')
  event.stopPropagation();
});
$('.copyandclose__btn').on('click', function() {
  /* Get the text field */
  var bankAccount=$('#iholdseat__number').text();
  var textarea = document.createElement('textarea');
  textarea.textContent = bankAccount;
  document.body.appendChild(textarea);

  var selection = document.getSelection();
  var range = document.createRange();
//  range.selectNodeContents(textarea);
  range.selectNode(textarea);
  selection.removeAllRanges();
  selection.addRange(range);

  console.log('copy success', document.execCommand('copy'));
  selection.removeAllRanges();

  document.body.removeChild(textarea);
  // window.location.href = 'index.html';

});

$('.bank__copy__btn').on('click', function() {
  /* Get the text field */
  var bankAccount=$(this).siblings('.payment__bankaccount').text();
  var textarea = document.createElement('textarea');
  textarea.textContent = bankAccount;
  document.body.appendChild(textarea);

  var selection = document.getSelection();
  var range = document.createRange();
//  range.selectNodeContents(textarea);
  range.selectNode(textarea);
  selection.removeAllRanges();
  selection.addRange(range);

  console.log('copy success', document.execCommand('copy'));
  selection.removeAllRanges();

  document.body.removeChild(textarea);
});


// =======NAVIGATION BAR============

$('.navi_home').on('click',function(){
  window.location.href = 'index.html';
})
$('.navi_user').on('click',function(){
  window.location.href = 'user.html';
})
$('.login__btn').on('click',function(){
  window.location.href = 'login.html';
})
$('.navi_order').on('click',function(){
  window.location.href = 'myorder.html';
})
