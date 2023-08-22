const DaysEl = document.getElementById('Days');
const HoursEl = document.getElementById('Hours');
const MinutesEl = document.getElementById('Minutes');
const SecondsEl = document.getElementById('Seconds');

const newYear = "#"; // put the date here for example "20 september 2023":
function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const Totalseconds = (newYearDate - currentDate) / 1000;
    const Days = Math.floor(Totalseconds / 3600 / 24);
    const Hours = Math.floor(Totalseconds / 3600 )% 24 ;
    const Minutes = Math.floor(Totalseconds / 60) % 60;
    const Seconds = Math.floor(Totalseconds % 60);

    DaysEl.innerHTML = Days;
    HoursEl.innerHTML = formatTime(Hours);
    MinutesEl.innerHTML = formatTime(Minutes);
    SecondsEl.innerHTML = formatTime(Seconds);

    console.log(Days , Hours, Minutes, Seconds);

}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);