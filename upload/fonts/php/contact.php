<?php
if(($_SERVER['REQUEST_METHOD']== 'POST') && (!empty($_POST['action']))):
  if (isset($_POST['name'])) {$name= $_POST['name'];}
  if (isset($_POST['email'])) {$email= $_POST['email'];}
  if (isset($_POST['message'])) {$message= $_POST['message'];}
  if (isset($_POST['ajaxrequest'])) {$ajaxrequest= $_POST['ajaxrequest'];}

  $noerrors = true;

  if($name === ''):
    $err_name = '<div class="error">Sorry, a name is required</div>';
    $noerrors = false;
  endif;

  if($email === ''):
    $err_name = '<div class="error">Sorry, an email is required</div>';
    $noerrors = false;
  endif;

  if($email === ''):
    $err_name = '<div class="error">Sorry, an email is required</div>';
    $noerrors = false;
  endif;

  if($message === ''):
    $err_name = '<div class="error">Sorry, a message is required</div>'; // php
    if($ajaxrequest){echo"<script>$('#message').after('<div>Sorry, a message is required</div>');</script>";} // Ajax
    $noerrors = false;
  endif;

  if($noerrors):
      $to = "corrphilip@gmail.com";
      $subject =  "From $name -- Beechlane Farmhouse";
      $body =  "$name filled out the form";
      $replyto =  "From: $email \r\n".
                  "Reply-To: corrphilip@gmail.com \r\n";

    if ($noerrors/*mail($to, $subject, $body, $replyto)*/):
      echo"<script>$(\"div\").removeClass(\"in\");</script>"; //hide contact form on success
      $msg = "Thanks for enquiring, we will get back to you asap."; // fall back if no js
      if($ajaxrequest):
        echo"<script>$('.navbar-static-top').after('<div class=\"alert alert-success\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><p>Thanks for enquiring, we will get back to you asap.</p></div>'); </script>";
      endif;
    else:
      $msg = "Sorry, there was a problem sending your enquiry. Please try again.";
    endif; // mail form data
  endif; // check form for errors
endif; //form submitted
?>
