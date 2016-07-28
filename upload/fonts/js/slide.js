$(document).ready(function(){
  var trigger = $('#navbar ul li a, .navbar-header li a'), // make array of all a tags in navbar, including title link
      content_container = $('#content_container'); // will replace everything inside this div and apply animation to it

      // apply css after transition, stops bug where carousel jumps down 600px
      $(".carousel").css({"z-index": "-1", "top":"0px", "position": "fixed"});
      $(".featurette_wrapper").css({"margin-top": "600px"});
      $(".navbar-header li a").removeClass('.active');

  trigger.on('click', function(){

      var $this = $(this), // page context
      target = $this.data('target'), // page to move to
      oldpage = $('.active.button'),
      newpage = $(".button." + target),
      list = $('#navbar ul li, .navbar-header li'),
      oldpagenum,
      newpagenum;

      list.each(function(index){
        var selector = $(this).get(0)
        if(selector === newpage.get(0)){
          newpagenum = index;
        } else if(selector === oldpage.get(0)){
          oldpagenum = index;
        }
      });

      if(oldpage.get(0) === newpage.get(0)){
        return false; // Stop normal link behavior if click on same link twice
      }
      // if not contact link and not the active link
     if($this.data('toggle')!="collapse" && !($('.active').is($("." + target)))){
       if(oldpagenum < newpagenum){
        animation = "slideOutLeft";
      } else {
        animation = "slideOutRight";
      }
        $("footer").hide(); // hide fixed footer for duration of transition

        //fix bug where carousel jumps down for animation by removing css for transition
        $(".carousel").css({"z-index": "", "top":"", "position": ""});
        $(".featurette_wrapper").css({"margin-top": ""});

        $("body").css({"overflow":"hidden"}); // hide scroll bars which appear during animation
        content_container.addClass('animated ' + animation)
        //wait for animation to finish before removing classes
        window.setTimeout( function(){ //wait for 2nd arg time before executing 1st arg function
            $("body").css({"overflow":""}); // allow scrolling after animation
            content_container.removeClass('animated ' + animation); // apply slide out
            content_container.load(target + '.php'); // Load target page into container
            oldpage.removeClass("active");
            newpage.addClass("active");
            if(oldpagenum < newpagenum){
             animation = "slideInRight";
           } else {
             animation = "slideInLeft";
           }
            $("body").css({"overflow":"hidden"});  // hide scroll bars which appear during animation
            content_container.addClass('animated ' + animation); // apply slide in
            $("body").css({"overflow":""}); // allow scrolling after animation

              window.setTimeout( function(){ // remove animation class after 900 ms
                content_container.removeClass('animated ' + animation)
                // reapply css after transition
                $(".carousel").css({"z-index": "-1", "top":"0px", "position": "fixed"});
                $(".featurette_wrapper").css({"margin-top": "600px"});
                if($this.data('target')=="availability"){
                  $('#content_container').children().attr('id','calendar');
                  $('#calendar').fullCalendar({
                      googleCalendarApiKey: 'AIzaSyCzMRSP6JdBnC5ytnbD83spI8b7RKP7Q5w',
                      events: {
                          googleCalendarId: 'n4mim9aefiebiucqpntp8ue0nk@group.calendar.google.com'
                      }
                  });
                }
              }, 1000);
        }, 900);
        $("footer").show();
    // Stop normal link behavior
      return false;
  }
  });
});
