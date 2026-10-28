const images = [
    "url(9.jpeg)",
    "url(8.jpg)",
    "url(7.jpeg)",
    "url(6.jpeg)",
    "url(5.jpg)",
    "url(4.jpeg)",
    "url(3.jpg)",
    "url(2.png)",
    "url(1.jpeg)",
    "url(0.jpeg)",
];

let intervalId;
let currentIndex = 0;
const counterImg = document.getElementById("counter-img");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resumeBtn = document.getElementById("resume-btn");

    function startCounter() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resumeBtn.disabled = true;
        intervalId = setInterval(updateCounter, 1000);
    }

    function stopCounter() {
        startBtn.disabled = true;
        stopBtn.disabled = true;
        resumeBtn.disabled = false;
        clearInterval(intervalId);
    }

    function resumeCounter() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resumeBtn.disabled = true;
        intervalId = setInterval(updateCounter, 1000);
    }

    function updateCounter() {
        currentIndex = (currentIndex + 1) % images.length;
        counterImg.style.backgroundImage = images[currentIndex];
    }

    startBtn.addEventListener("click", startCounter);
    stopBtn.addEventListener("click", stopCounter);
    resumeBtn.addEventListener("click", resumeCounter);
