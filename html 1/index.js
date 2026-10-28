
// Create an audio element
const bgm = new Audio('index/audio1.mp3');

// Function to play the background music
function playbgm() {
    backgroundMusic.play();
}

// Play the background music when the webpage loads
window.addEventListener('load', playbgm);
