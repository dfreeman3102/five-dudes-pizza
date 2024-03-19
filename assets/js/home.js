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
