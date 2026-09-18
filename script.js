const timerText = document.getElementById('timer-text');
const statusText = document.getElementById('status-text');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let timeLeft = 25 * 60;
let timerId = null;
let isFocusMode = true;

// Configuración inicial del anillo
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const totalTime = isFocusMode ? 25 * 60 : 5 * 60;
    const percent = ((totalTime - timeLeft) / totalTime) * 100;
    setProgress(percent);
}

// Web Audio API para el sonido de notificación
function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // Nota La5
    oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

function switchMode() {
    isFocusMode = !isFocusMode;
    timeLeft = isFocusMode ? 25 * 60 : 5 * 60;
    statusText.textContent = isFocusMode ? 'Enfoque' : 'Descanso';
    document.body.className = isFocusMode ? 'focus-mode' : 'break-mode';
    playNotificationSound();
    updateTimerDisplay();
}

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = 'Iniciar';
        return;
    }

    startBtn.textContent = 'Pausar';
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            startBtn.textContent = 'Iniciar';
            switchMode();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    isFocusMode = true;
    timeLeft = 25 * 60;
    statusText.textContent = 'Enfoque';
    document.body.className = 'focus-mode';
    startBtn.textContent = 'Iniciar';
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Inicializar vista
updateTimerDisplay();
