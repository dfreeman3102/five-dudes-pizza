bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 1000
});



document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: function (holiday, getDate) {
            fetch('https://date.nager.at/api/v3/PublicHolidays/2024/US')
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);
                    //with consoling the data, good friday is mentioned 2 times within the call,
                    //that is why it is displayed 2 times
                    var events = [];
                    for (var i = 0; i < data.length; i++) {
                        //displays holiday on correct date
                        events.push({
                            title: data[i].name,
                            start: data[i].date
                        });
                    }
                    getDate(events);
                })
        }
    }); calendar.render();
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
});