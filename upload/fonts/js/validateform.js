$(document).ready(function(){
  $('#form').submit(function(){
    var abort = false;
    $("div.error").remove(); // remove errors from previous submission attempt
    $(':input[type=\'text\']').each(function() {
      if($(this).val === ''){
        $(this).after('<div class="error">This is a required field</div>');
        abort = true;
      }
    }); // go through each required value

    if(abort) {
      return false;}
    else {
      postData = $('#form').serialize();
      $.post('contact.php', postData+'&action=submit&ajaxrequest=1', function(msg){ //pass action too in case submit button not clicked, function carried out on completion of php
        if(msg){
          $('#form').before(msg);
        }
      }); // end of ajax post
      return false; // set form submission event to false so that it never arrives at contact.php unless it is going through js
    }
  }); // on submit
}); //ready

$('input[placeholder]').blur(function(){ //on exit
  $("div.error").remove();
  var pattern = $(this).attr('pattern');
  var placeholder = $(this).attr('placeholder');
  var isValid = $(this).val().search(pattern) >= 0; //neg number if no match

  if(!isValid) {
    $(this).focus();
    $(this).after('<div class="error">Entry does not match expected pattern: ' + Placeholder + '</div>');
  } // isValid test
}); // onblur
