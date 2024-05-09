const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince", "raspberry",
    "strawberry", "tangerine", "watermelon"
];

let wordIndex;
let score = 0;
let time = 0;
let isPlaying = false;
let timer;

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const startButton = document.querySelector('button');

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function showWord() {
    wordIndex = getRandomWord();
    wordElement.textContent = wordIndex;
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function updateTime() {
    time++;
    timeElement.textContent = time;
}

const stopButton = document.getElementById('stopButton');

function stopGame() {
    clearInterval(timer);
    isPlaying = false;
}

function startGame() {
    if (!isPlaying) {
        isPlaying = true;
        inputElement.value = '';
        score = 0;
        time = 0;
        scoreElement.textContent = 0;
        timeElement.textContent = 0;
        startButton.textContent = 'Restart Game';
        showWord();
        inputElement.focus();
        timer = setInterval(updateTime, 1000);
        const audio = new Audio("./audio/background.mp3");
        audio.play();
        audio.loop = true;
        audio.volume = 0.5;
    } else {
        clearInterval(timer);
        startGame();
    }
}

inputElement.addEventListener('input', () => {
    const typedWord = inputElement.value;
    if (typedWord === wordIndex) {
        var audio = new Audio("./audio/correct.mp3");
        audio.play();
        showWord();
        inputElement.value = '';
        updateScore();
    }
});

