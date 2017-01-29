function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.352, lng: 18.6466},
    zoom: 8
  });
}

function getMapLocation() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.352, lng: 18.6466},
    zoom: 8
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        var my_location_marker = new google.maps.Marker({
          position:  {lat: pos.lat, lng: pos.lng},
          map:map,
          title:'You are here'

        })
      map.setCenter(pos);


      my_location_marker.setMap(map)
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

