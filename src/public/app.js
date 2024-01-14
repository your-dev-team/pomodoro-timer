let timer;
let timeLeft = 25 * 60;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timerDisplay').innerText = Math.floor(timeLeft / 60) + ':' + (timeLeft % 60 < 10 ? '0' : '') + timeLeft % 60;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! Take a 5-minute break.");
            timeLeft = 5 * 60;
            startTimer();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    document.getElementById('timerDisplay').innerText = '25:00';
}

function setTitle() {
    const title = document.getElementById('titleInput').value;
    document.title = title;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('setTitleButton').addEventListener('click', setTitle);

resetTimer();
