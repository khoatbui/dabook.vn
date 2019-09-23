bookingSticky = document.getElementById('icomponent__booking__sticky');
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (
    bookingSticky != null &&
    (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700)
  ) {
    bookingSticky.style.display = 'block';
  } else {
    bookingSticky.style.display = 'none';
  }
}