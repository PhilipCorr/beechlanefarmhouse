$(document).ready(function(){
  // remove button on small screens
  $(window).resize(function(){
    if($(window).width() < 400){
      $('.pull-right').hide();
    }
    else{
      $('.pull-right').show();
    }

    // wrap text on small screens
    if($(window).width() < 400){
      $('.contact_statement > p').replaceWith("<p>Please make an enquiry.<br>We will get back to you asap.</p>");
      $('.contact-info p:first-child').replaceWith("<p>Address: Grangehill, Clifden,<br>Co.Kilkenny, Ireland.</p>");
    }
    else{
      $('.contact_statement > p').replaceWith("<p>Please make an enquiry. We will get back to you asap.</p>");
      $('.contact-info p:first-child').replaceWith("<p>Address: Grangehill, Clifden, Co.Kilkenny, Ireland.</p>");

    }
  });
});
