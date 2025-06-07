let remaining = 600; // 10 минут в секундах
let interval = null;
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
    const seconds = (remaining % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

async function syncTimer() {
    const res = await fetch('api.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'action=get'
    });
    const data = await res.json();
    remaining = data.time_left;
    isRunning = data.running;
    updateDisplay();
}

function saveTimer() {
    fetch('api.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `action=set&time_left=${remaining}&running=${isRunning}`
    });
}

function startTimer() {
    if (!isRunning && remaining > 0) {
        isRunning = true;
        saveTimer();
        interval = setInterval(() => {
            if (remaining > 0) {
                remaining--;
                updateDisplay();
                saveTimer();
            } else {
                clearInterval(interval);
                isRunning = false;
                saveTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
    saveTimer();
}

function resetTimer() {
    clearInterval(interval);
    remaining = 600;
    isRunning = false;
    updateDisplay();
    saveTimer();
}

// Для tablo.php
if (document.getElementById('timer')) {
    syncTimer();
    setInterval(syncTimer, 1000);
}