var geoLoc = navigator.geolocation;

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var directionsMap;
var directionsLong, directionsLat, directionsLatLong, start, end;

$('#error-display').hide();


function getDirectionsLocation(){
  console.log('direciotns');
  if(geoLoc){
    geoLoc.getCurrentPosition(showDirectionsPosition)
  } else {
    $('#direction-canvas').html('Geolokacja nie jest suportowana')
  }
}
function showDirectionsPosition(position){
  directionsLat = position.coords.latitude;
  directionsLong = position.coords.longitude;
  directionsLatLong = new google.maps.LatLng(directionsLat, directionsLong);
  initialize();
}

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:16,
    center: directionsLatLong
  }
  directionsMap = new google.maps.Map(document.getElementById('direction-canvas'), mapOptions);
  directionsDisplay.setMap(directionsMap);
  var marker = new google.maps.Marker({map:directionsMap, position:directionsLatLong ,
    title:'I know where you are!'});
}

function calcRoute() {
  start = $('#start').val();
  end = $('#end').val();
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    } else if ( status == 'NOT_FOUND' ){
      $('#error-display').html('Miejscowości o takiej nazwie nie istnieją. Spróbuj ponownie').fadeIn()
    }else if ( status == 'INVALID_REQUEST' ){
      $('#error-display').html('Przepraszamy. Błędne zapytanie. Spróbuj ponownie.')
    }
  });
}

$(document).on('click', '#directionButton', function(event){
 calcRoute();
})

getDirectionsLocation();