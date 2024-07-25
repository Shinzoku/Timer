let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let elapsedTime = 0;

// Function to format time in hh:mm:ss
function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimer() {
    if (running) {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime + elapsedTime;
        document.getElementById('timerDisplay').textContent = formatTime(difference);
    }
}

// Function to start the timer
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTimer, 1000); // Update every second
        running = true;
    }
}

// Function to stop the timer
function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        elapsedTime = difference;
        running = false;
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(tInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById('timerDisplay').textContent = '00:00:00';
}

// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
