$('#availability_link').click(function () {
  $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyCzMRSP6JdBnC5ytnbD83spI8b7RKP7Q5w',
      events: {
          googleCalendarId: 'n4mim9aefiebiucqpntp8ue0nk@group.calendar.google.com'
      }
  });
});
