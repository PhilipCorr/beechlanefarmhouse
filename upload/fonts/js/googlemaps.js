
    var myLatLng = new google.maps.LatLng(52.664566, -7.119724);
    var mycenter = new google.maps.LatLng(52.652902, -7.191067);

    function initialize() {
      var mapOptions = {  <!--Object literal to hold map properties-->
        zoom: 12,
        center: mycenter,
        zoomControl:true,
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"), <!--map is a class. new calls a new instance of it-->
        mapOptions);  <!-- object takes in div element and map properties-->
      <!--document.getElementById obtains a reference to the container for the map as map-canvas is a child of the document-->

      var contentString = 
      '<div id="map_label">'+
      '<div id="content">'+
      '<div id="bodyContent" >'+
      '<p>Beech Lane Farmhouse</p>'+
      '</div>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
       position: myLatLng,
       map: map, /*the marker is placed on construction of the marker using the map property*/

     });

      google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map,marker);
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize); <!-- event listener loads the map after the page has loaded -->
