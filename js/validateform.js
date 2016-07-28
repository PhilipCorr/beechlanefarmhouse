$(document).ready(function(){
  $('#form').submit(function(){
    var abort = false;
    $("div.error").remove(); // remove errors from previous submission attempt
    $('input#name, textarea').each(function() { //[type=\'text\']

     if(!$(this).val()){
       $(this).before('<div class="error contact_statement">Required field</div>');
       abort = true;
     }
     });

     $('input#email').each(function() { //[type=\'text\']
        var placeholder = $(this).attr('placeholder');
        var pattern = $(this).attr('pattern');
        var isValid = $(this).val().search(pattern) >= 0; //neg number if no match

        if(!isValid) {
          //$(this).focus();
          $(this).before('<div class="error contact_statement">Expected pattern: ' + placeholder + '</div>');
        }
    //   // if(!$(this).val()){
    //   //   $(this).befor e('<div class="error contact_statement">Required field: ' + placeholder + '</div>');
    //   //   abort = true;
    //   //}
      });

    if(abort) {
      return false;}
    else {
      postData = $('#form').serialize(); // convert fields to form php will understand
      $.post('contact.php', postData + '&action=submit&ajaxrequest=1', function(msg, status){
        //pass action, as if coming straight from submit button, and ajax notifier, function carried out on completion of php
        if(msg){
          $('#form').before(msg);
          $('input#name, textarea, input#email').val('');
        }
      }); // end of ajax post
      return false; // set form submission event to false so that it never arrives at contact.php unless it is going through js
    }
  }); // on submit


//if exits input field which has placeholder
// $('input#email').blur(function(){
//   $("input#email").next("div.error").remove();
//   var pattern = $(this).attr('pattern');
//   var placeholder = $(this).attr('placeholder');
//   var isValid = $(this).val().search(pattern) >= 0; //neg number if no match
//
//   if(!isValid) {
//     //$(this).focus();
//     $(this).after('<div class="error contact_statement">Expected pattern: ' + placeholder + '</div>');
//   } // isValid test
// }); // onblur

$('input#email').bind('input', function(){
  var placeholder = $(this).attr('placeholder');
  var pattern = $(this).attr('pattern');
  var isValid = $(this).val().search(pattern) >= 0; //neg number if no match

  if(isValid){
    $(this).prev("div.error").remove();
  }

  if(!isValid) {
    //$(this).focus();
    $(this).prev("div.error").remove();
    $(this).before('<div class="error contact_statement">Expected pattern: ' + placeholder + '</div>');
  }
});

$('input#name, textarea').bind('input', function(){

  if($(this).val()){
    $(this).prev("div.error").remove();
  }

  if(!$(this).val()){
    $(this).before('<div class="error contact_statement">Required field</div>');
  }

});
}); //ready
