bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 1000
});



document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });
