const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearEl = document.getElementById("year");

const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");

let musicOn = false;

/* Danh sách Tết Âm lịch (giờ VN) */
const tetDates = {
    2026: "2026-02-17T00:00:00",
    2027: "2027-02-06T00:00:00",
    2028: "2028-01-26T00:00:00",
    2029: "2029-02-13T00:00:00",
    2030: "2030-02-03T00:00:00"
};

function getNextTet() {
    const now = new Date();
    for (let year in tetDates) {
        const tet = new Date(tetDates[year]);
        if (tet > now) {
            yearEl.innerText = `Tết Âm lịch ${year}`;
            return tet;
        }
    }
    return new Date(tetDates[2030]);
}

let targetDate = getNextTet();

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        location.reload();
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const m = Math.floor(diff / (1000 * 60)) % 60;
    const s = Math.floor(diff / 1000) % 60;

    daysEl.textContent = d;
    hoursEl.textContent = h.toString().padStart(2, "0");
    minutesEl.textContent = m.toString().padStart(2, "0");
    secondsEl.textContent = s.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* Nhạc Tết */
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
