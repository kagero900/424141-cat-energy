var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var point = new google.maps.LatLng(((screen.width < 1300) ? 59.938751 : 59.939075), ((screen.width < 1300) ? 30.323072 : 30.31965));
  var map = new google.maps.Map(document.getElementById('map'), {
    center: point,
    zoom: 17
  });
  var image = (screen.width < 768) ? "img/map-pin-small.png" : "img/map-pin.png";
  var marker = new google.maps.Marker({
    position: {lat: 59.938751, lng: 30.323072},
    map: map,
    icon: image
  });
}
