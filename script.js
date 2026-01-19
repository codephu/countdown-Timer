const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearEl = document.getElementById("year");

const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");

let musicOn = false;

const tetDates = {
    2026: "2026-02-17T00:00:00",
    2027: "2027-02-06T00:00:00",
    2028: "2028-01-26T00:00:00",
    2029: "2029-02-13T00:00:00",
    2030: "2030-02-03T00:00:00"
};

function getNextTet() {
    const now = new Date();
    for (let y in tetDates) {
        const t = new Date(tetDates[y]);
        if (t > now) {
            yearEl.textContent = `Tết Âm lịch ${y}`;
            return t;
        }
    }
}

let target = getNextTet();

function updateCountdown() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) location.reload();

    daysEl.textContent = Math.floor(diff / 86400000);
    hoursEl.textContent = Math.floor(diff / 3600000 % 24).toString().padStart(2,"0");
    minutesEl.textContent = Math.floor(diff / 60000 % 60).toString().padStart(2,"0");
    secondsEl.textContent = Math.floor(diff / 1000 % 60).toString().padStart(2,"0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

musicBtn.onclick = () => {
    if (!musicOn) {
        music.play();
        musicBtn.textContent = "🔇 Tắt nhạc Tết";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Bật nhạc Tết";
    }
    musicOn = !musicOn;
};
