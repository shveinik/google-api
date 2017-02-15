$(document).ready(function(){

  var ironhackBCN = {
        lat: 41.3977381,
        lng: 1.190471916
      };

  // Create and Initialize Map
    const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: ironhackBCN
  });

  let markers = [];
  myPlaces.forEach(function(place){
    let title = place.name;
    let position = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    if(place.type === "COFFEE"){
      pin.setIcon("http://maps.google.com/mapfiles/ms/micons/coffeehouse.png");
    }else if(place.type === "BOOKS"){
      pin.setIcon("http://maps.google.com/mapfiles/ms/micons/info.png");}
    markers.push(pin);
  });

});
