<?php
if(($_SERVER['REQUEST_METHOD']== 'POST') && (!empty($_POST['action']))):
  if (isset($_POST['name'])) {$name= $_POST['name'];}
  if (isset($_POST['email'])) {$email= $_POST['email'];}
  if (isset($_POST['message'])) {$message= $_POST['message'];}
  if (isset($_POST['ajaxrequest'])) {$ajaxrequest= $_POST['ajaxrequest'];}

  $noerrors = true;
  if($name === ''):
    $err_name = '<div class="error">Sorry, a name is required</div>';
    if($ajaxrequest) {echo "<script>$('#name').after('<div class=\"error\">Sorry, a name is required</div>')</script>";}
    $noerrors = false;
  endif;

  if($email === ''):
    $err_name = '<div class="error">Sorry, an email is required</div>';
    if($ajaxrequest) {echo "<script>$('#email').after('<div class=\"error\">Sorry, an email is required</div>')</script>";}
    $noerrors = false;
  endif;

  if($message === ''):
    $err_name = '<div class="error">Sorry, a message is required</div>'; // php
    if($ajaxrequest){echo"<script>$('#message').after('<div>Sorry, a message is required</div>')</script>";} // Ajax
    $noerrors = false;
  endif;

  if($noerrors){
      $to = "corrphilip@gmail.com";
      $subject =  "Enquiry from $name for Beechlane Farmhouse";
      $body =  "Message from www.beechlanefarmhouse.com:\n\n $message";
      $replyto =  "From: $email \r\n".
                  "Reply-To: corrphilip@gmail.com \r\n";

      echo"<script>$(\"div\").removeClass(\"in\");</script>"; //hide contact form on success
      $msg = "";
      $successMail = mail($to, $subject, $body, $replyto);
      if($successMail){
        if($ajaxrequest){
          echo"<script>$('.navbar-static-top').after('<div class=\"alert alert-success\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><p>Thanks for enquiring, we will get back to you asap.</p></div>'); </script>";
        }
        $msg = "Thanks for enquiring, we will get back to you asap."; // fall back if no js
      }
      else{
        $msg = "Sorry, there was a problem sending your enquiry. Please try again.";
      } // mail form data
      if(!$noerrors){
        $msg = "At least one of the fields is empty";
      }
      return $msg;
    } // no errors check
 endif; //form submitted
?>
