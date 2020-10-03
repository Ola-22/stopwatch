let timer = 0,
    timerInterval,
    ms = document.getElementById('ms'),
    second = document.getElementById('second'),
    minute = document.getElementById('minute'),
    hour = document.getElementById('hour'),
    btnstart = document.querySelector('#start'),
    btnreset = document.querySelector('#reset'),
    btnstop = document.querySelector('#stop');

btnstart.addEventListener('click', () => {
    stop();
    timerInterval = setInterval(function() {
        timer += 1 / 60;
        msVal = Math.floor((timer - Math.floor(timer)) * 100);
        secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
        minuteVal = Math.floor(timer / 60);
        ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
        if (minute.textContent === 60) {
            hour.textContent += 1
        }
    }, 1000 / 60);
});

btnstop.addEventListener('click', () => {
    clearInterval(timerInterval);

});

btnreset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timer = 0;
    second.textContent = "00";
    ms.textContent = "00"
    minute.textContent = "00"
    hour.textContent = "00"

});