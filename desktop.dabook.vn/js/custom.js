$('.owl__topdes').owlCarousel({
  items:5,
    loop:true,
    margin:10,
    merge:true,
    nav:true,
    dots:false,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    },
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
});

$('.owl__todaypro').owlCarousel({
  items:3,
    loop:true,
    margin:10,
    merge:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    },
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
});
$('.owl__bookingbg').owlCarousel({
  items:1,
    loop:true,
    margin:10,
    merge:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    },
});
$('.owl__favoritedeslist').owlCarousel({
  items:1,
    loop:true,
    margin:10,
    merge:true,
    nav:false,
    dots:false,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    },
});

$("#booking__checkin").flatpickr({
  minDate: "today",
  dateFormat: "Y-m-d",
});
$("#booking__checkout").flatpickr({
  minDate: "today",
  dateFormat: "Y-m-d",
});
$("#booking__checkin__sticky").flatpickr({
  minDate: "today",
  dateFormat: "Y-m-d",
});
$("#booking__checkout__sticky").flatpickr({
  minDate: "today",
  dateFormat: "Y-m-d",
});