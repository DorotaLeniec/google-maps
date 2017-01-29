var API_KEY = 'AIzaSyD3PRRjN1TXyhtE3M8nTf66NNWjGNrtIGA'
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start,
  end;

var startPointLat;
var endPointLat;
var startPointLng;
var endPointLng;
var startLatLng,
  endLatLng;
var directionsMap;

function getDirection() {
  // getEndLocation();
  getStartLocation();
}

function getStartLocation() {

  var startCity = $('#start-point-name').val();
  console.log('getStartLocation', startCity)
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=' + API_KEY + '&new_forward_geocoder=true&address=' + startCity,
    type: 'GET',
    success: function (response) {
      var start = response.results[0].geometry.location.lat;
      var end = response.results[0].geometry.location.lng;
      startPointLat = start;
      startPointLng = end;
      startLatLng = new google.maps.LatLng(start, end)
      console.log('odpowiedz', response.results[0].geometry.location, 'koortynaty miasta', start, end)
      getDirection2();
    }
  })

}


function getEndLocation() {

  var endCity = $('#end-point-name').val();
  console.log('getEndLocation', endCity)

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=' + API_KEY + '&new_forward_geocoder=true&address=' + endCity,
    type: 'GET',
    success: function (response) {
      var start = response.results[0].geometry.location.lat;
      var end = response.results[0].geometry.location.lng;
      endPointLat = start;
      endPointLng = end;
      endLatLng = new google.maps.LatLng(start, end)
      console.log('odpowiedz', response.results[0].geometry.location, 'koortynaty miasta', start, end, endLatLng)
    }
  })
}

function getDirection2() {
  console.log('get 22222222')
  directionsDisplay = new google.maps.DirectionsRenderer();
  start = new google.maps.LatLng(startPointLat, startPointLng)
  var mapOptions = {
    zoom: 7,
    center: start
  }
  directionsMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(directionsMap);
  calcRoute()
}

function calcRoute() {
  console.log('dupa')
  end = 'Kcyńska 27, 81-005 Gdynia'
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}


