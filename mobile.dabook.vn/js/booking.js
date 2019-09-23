// ======DATE RANGE=========

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