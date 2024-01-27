let hr = min = sec = ms = "0" + 0, startTimer;
const startBtn = document.querySelector(".start");
function start(flag) {
    if (flag) { startBtn.disabled = true; }
    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        stopwatch.innerHTML = `${hr}:${min}:${sec}:${ms}`;
    }, 10); //1000ms = 1s

}

function stop() {
    startBtn.disabled = false;
    clearInterval(startTimer);
}

function reset() {
    startBtn.disabled = false;
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    stopwatch.innerHTML = "00:00:00:00";
}
