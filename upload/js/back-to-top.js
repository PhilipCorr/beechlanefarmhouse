$(document).ready(function(){
 $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

        // change z index so footer is on top at the bottom
        if ($(this).scrollTop() > 1000) {
            $("#footer").css({"z-index": "-1"});
          } else {
              $('#footer').css({"z-index": ""});
          }

    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
