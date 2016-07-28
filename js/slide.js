$(document).ready(function(){
  // make array of all a tags in navbar, including title link
  var trigger = $('#navbar ul li a, .navbar-header li a'),
  // will replace everything inside this div and apply animation to it
  content_container = $('#content_container');

      // apply css after transition, stops bug where carousel jumps down 600px
  $('body').click(function(evt){
            // if click inside of contact area, don't close contact box
            if($(evt.target).closest('#collapse1').length){
              return;
            }

            if($("#collapse1").hasClass("in")){
              document.getElementById("contact_link").click();
            }
      });

      $('a').click(function() {
          $('#navbar').collapse('hide');
        });


  trigger.on('click', function(){

    //close contact if changing page
    if($("#collapse1").hasClass("in")){
      document.getElementById("contact_link").click();
    }

      var $this = $(this), // page context
      target = $this.data('target'), // page to move to
      oldpage = $('.active.button'),
      newpage = $(".button." + target),
      list = $('#navbar ul li, .navbar-header li'),
      oldpagenum,
      newpagenum,
      animation1,
      animation2;

      // track weather moving left or right along nav bar
      list.each(function(index){
        var selector = $(this).get(0)
        if(selector === newpage.get(0)){
          newpagenum = index;
        } else if(selector === oldpage.get(0)){
          oldpagenum = index;
        }
      });

      // Stop normal link behavior if click on same link twice
      if(oldpage.get(0) === newpage.get(0)){
        return false;
      }

      // if not contact link and not the active link
     if($this.data('toggle')!="collapse" && !($('.active').is($("." + target)))){
       if(oldpagenum < newpagenum){
        animation1 = "slideOutLeft";
        animation2 = "slideInRight";
      } else {
        animation1 = "slideOutRight";
        animation2 = "slideInLeft";
      }
        $("footer").hide(); // hide fixed footer for duration of transition

        //fix bug where carousel jumps down for animation by removing css for transition
        $(".carousel").css({"z-index": "", "top":"", "position": ""});
        $(".featurette_wrapper").css({"margin-top": ""});

        $("body").css({"overflow":"hidden"}); // hide scroll bars which appear during animation
        content_container.addClass('animated ' + animation1)
        oldpage.removeClass("active");
        newpage.addClass("active");
        //wait for animation to finish before removing classes
        window.setTimeout( function(){ //wait for 2nd arg time before executing 1st arg function
            $("body").css({"overflow":""}); // allow scrolling after animation
            content_container.hide();
            content_container.removeClass('animated ' + animation1);
            content_container.load(target+'.php', function(){
              if($this.data('target')=="availability"){
                $('#content_container').children().attr('id','calendar');
                $('#calendar').fullCalendar({
                    googleCalendarApiKey: 'AIzaSyCzMRSP6JdBnC5ytnbD83spI8b7RKP7Q5w',
                    events: {
                        googleCalendarId: 'n4mim9aefiebiucqpntp8ue0nk@group.calendar.google.com'
                    }
                });
              }
                content_container.show();
                $('#calendar').fullCalendar('render');
                content_container.addClass('animated ' + animation2); // apply slide in

           }); // Load target page into container

              window.setTimeout( function(){
                content_container.removeClass('animated ' + animation2)
                $("footer").show();

              }, 1200);
        }, 1000);
    // Stop normal link behavior
      return false;
  }
  });
});
