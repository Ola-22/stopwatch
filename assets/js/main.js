let hr = 0,
    min = 0,
    sec = 0,
    ms = 0,
    timer,
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

function startTimer() {
    if (sec < 59) {
        sec++;
        seconds.textContent = (sec <= 9) ? ('0' + sec) : sec;
    } else {
        sec = 0;
        min++;
        seconds.textContent = (sec <= 9) ? ('0' + sec) : sec;
    }
    if (min <= 59) {
        minutes.textContent = (min <= 9) ? ('0' + min) : min;
    } else {
        min = 0;
        hr++
        minutes.textContent = (min <= 9) ? ('0' + min) : min;
    }
    if (hr < 24) {
        hours.textContent = (hr <= 9) ? ('0' + hr) : hr;
    } else {
        stop();
    }
}

function start() {
    timer = setInterval(startTimer, 1000);
    start.disabled = true;
}

function stop() {
    clearInterval(timer);
    start.disabled = false;

}

function reset() {

    clearInterval(timer);
    min = 0;
    sec = 0;
    hr = 0;
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';

}