<?php include "contact.php"; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="images/favIcon/B.png">

    <title>Beech Lane Farm House</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/activities.css" rel="stylesheet">
    <link href="css/testimonials.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet" >
    <link href="carousel.css" rel="stylesheet">
    <link href="css/contact.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet" type="text/css">
    <link href="css/index.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/contact.css" rel="stylesheet">
    <link href="css/fullcalendar.min.css" rel="stylesheet">
    <link href="css/availability.css" rel="stylesheet">
    <script src="js/ie-emulation-modes-warning.js"></script>

    <script>var __adobewebfontsappname__="dreamweaver"</script>
    <script src="js/back-to-top.js"></script>
    <script src="js/slide.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <?php if(isset($msg)){echo '<div><p>', $msg, '</p></div>';} ?>
    <div id="content">
    <div class="navbar-wrapper">
      <!-- <div class="container"> -->
        <nav class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <li class="title_list"><a class="navbar-brand home" style="font-family: tangerine; font-size: 36px;" href="../index.html" data-target="home">Beech Lane Farm house</a></li>
            </div>
            <div id="navbar" class="navbar-collapse collapse bg-inverse p-a-1">

              <!-- <div class="collapse navbar-collapse" id="myNavbar"> -->

              <ul class="nav navbar-nav">
                <li class="active home button"><a href="html/index.html" data-target="home">Home</a></li>
                <li class="activities button"><a href="html/activities.html" data-target="activities">Activities</a></li>
                <li class="contact_li button"><a id="contact_link" data-toggle="collapse" href="#collapse1">Contact</a></li>
                <li class="testimonials button"><a href="html/testimonials.html" data-target="testimonials">Testimonials</a></li>
                <li class="availability button"><a id="availability_link" href="html/availability.html" data-target="availability">Availability</a></li>
              </ul>

            <!-- </div>  -->

            </div>

          <div id="collapse1" class="panel-collapse collapse">
            <div class="row">
            <div id="contact" class="border col-sm-4">

                <form id="form"  method="POST" role ="form">
                    <fieldset class="contact_border">
                      <div class="contact_statement">
                        <p>Please make an enquiry. We will get back to you asap.</p>
                      </div>
                        <label for="name">
                          <div id="name_title">
                            Name:
                          </div>
                          <input type="text" name="name" id="name" size="15" placeholder="First & Last Name" maxlength="30" />
                          <?php if(isset($err_myname)) {echo $err_myname;} ?>
                        </label>
                       <label for="email">
                          <div id="email_title">
                           Email:
                         </div>
                          <input id="email" type="email" id="email" name="email" pattern=".+@.+\..+" placeholder="email@example.com" />
                        </label>
                        <label for="message">
                          <div id="message_title">
                            Message:
                          </div>
                          <textarea id="textarea" name="message" id="message"></textarea>
                        </label>


                          <input id="submit" name="action" type="submit" value="submit">

                </fieldset>
                </form>
            </div>

            <!-- Map -->
            <div class="border col-sm-8">
                <div class="figure">
                    <div id="map-canvas" style="height:100%;"/></div>
                </div>
            </div>
            </div>
            </div>

          </nav>
        <!-- </div> outer most container keeps navbar thinner than full screen -->
        </div> <!-- navbar wrapper -->
  <div id="content_container" >
    <?php
    // The slide jquery is loading before the php not overwriting it
      include('home.php');
    ?>
  </div>

</div> <!-- /.content -->
    <!-- FOOTER -->
    <p class="pull-right">
      <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top"
      role="button" title="Back to Top" data-toggle="tooltip" data-placement="top">
          <span class="arrow-back-to-top glyphicon glyphicon-chevron-up"></span>
      </a>
    </p>
    <footer id="footer">
      <br><h1>Beech Lane Farmhouse</h1>
      <ul>
        <li><a href="http://www.visitkilkenny.ie/Beechlane-Farmhouse_Self_Catering_Kilkenny"><img src="images/visitkilkenny/180x90.png" style="width:7em; height:4em;"></a></li>
        <li><a href="https://www.facebook.com/beechlanefarmhouse.accommodation"><img src="images/facebook/29x29.png"></a></li>
        <li><a href="https://www.tripadvisor.ie/VacationRentalReview-g2064183-d4608509-BEECH_LANE_FARMHOUSE_pet_friendly_off_road_parking_front_and_rear_gardens_in_Gowran_R.html"><img src="../images/tripadvisor/160x100.png"></a></li>
        <li><a href="https://www.airbnb.ie/rooms/13813887?guests=6&s=k0fuKJwb"><img src="images/Airbnb/160x100.png"></a></li>
      </ul>
      <div class="contact-info">
        <p>Address: Grangehill, Clifden, Co.Kilkenny, Ireland.</p>
        <p>Tel: +353 (0)851529959</p>
        <p>Email: canice.corr@gmail.com</p>
      </p>
    </footer>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script>window.jQuery || document.write('<script src="../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="../js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/ie10-viewport-bug-workaround.js"></script>

  <!--include the Maps Api javascript using the script tag-->
  <!--include the Maps Api javascript using the script tag-->
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzMRSP6JdBnC5ytnbD83spI8b7RKP7Q5w"></script>
  <script type="text/javascript">
  var myLatLng = new google.maps.LatLng(52.664566, -7.119724);
  var mycenter = new google.maps.LatLng(52.764566, -7.191067);

  function initialize() {
    var mapOptions = {
      zoom: 12,
      center: mycenter,
      zoomControl:true,
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), //map is a class. new calls a new instance of it
      mapOptions);  // object takes in div element and map properties
    //document.getElementById obtains a reference to the container for the map as map-canvas is a child of the document


    var infowindow = new google.maps.InfoWindow({
      content: '<p>Beech Lane Farmhouse</p>'
    });

    var marker = new google.maps.Marker({
     position: myLatLng,
     map: map, /*the marker is placed on construction of the marker using the map property*/

   });

    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(map,marker);
    });

  }

  google.maps.event.addDomListener(window, 'load', initialize); // event listener loads the map after the page has loaded

  </script>
  <script type="text/javascript" src="../js/googlemaps.js"></script> -->
  <script type="text/javascript" src="js/validateform.js"></script>
  <script type="text/javascript" src="js/contact.js"></script>

  <!-- Calendar js files -->
  <script type="text/javascript" src="js/moment.min.js"></script>
  <script type="text/javascript" src="js/fullcalendar.min.js"></script>
  <script type="text/javascript" src="js/gcal.js"></script>
  <script type="text/javascript" src="js/responsivedesign.js"></script>

  </body>
</html>
