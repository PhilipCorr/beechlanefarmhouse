$('body').click(function(evt){

       //if descendant of #collapse1 being clicked
       if($(evt.target).closest('#collapse1').length)
          return;

          if($(evt.target).closest('#contact_li').length)
             return;
      // remove class if click outside of contact area
      if($("#collapse1").hasClass("in")){
        document.getElementById("contact_link").click();
      }
});
