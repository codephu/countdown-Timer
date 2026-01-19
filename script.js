/* ================== COUNTDOWN ================== */
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearSolarEl = document.getElementById("yearSolar");
const yearLunarEl = document.getElementById("yearLunar");

const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");

let musicOn = false;

const tetData = {
    2026: { date: "2026-02-17T00:00:00", lunar: "Bính Ngọ" },
    2027: { date: "2027-02-06T00:00:00", lunar: "Đinh Mùi" },
    2028: { date: "2028-01-26T00:00:00", lunar: "Mậu Thân" },
    2029: { date: "2029-02-13T00:00:00", lunar: "Kỷ Dậu" },
    2030: { date: "2030-02-03T00:00:00", lunar: "Canh Tuất" }
};

function getNextTet() {
    const now = new Date();
    for (let y in tetData) {
        const t = new Date(tetData[y].date);
        if (t > now) {
            yearSolarEl.textContent = `Tết Âm lịch ${y}`;
            yearLunarEl.textContent = `Năm ${tetData[y].lunar}`;
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

/* ================== MUSIC ================== */
musicBtn.onclick = () => {
    musicOn ? music.pause() : music.play();
    musicBtn.textContent = musicOn ? "🎵 Bật nhạc Tết" : "🔇 Tắt nhạc Tết";
    musicOn = !musicOn;
};

/* ================== FIREWORKS ================== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

window.onresize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
};

let particles = [];

function firework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 80; i++) {
        particles.push({
            x, y,
            vx: Math.cos(i) * Math.random() * 4,
            vy: Math.sin(i) * Math.random() * 4,
            alpha: 1
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;

        ctx.fillStyle = `rgba(255,215,0,${p.alpha})`;
        ctx.fillRect(p.x, p.y, 3, 3);

        if (p.alpha <= 0) particles.splice(i,1);
    });
    requestAnimationFrame(animateFireworks);
}

setInterval(firework, 1200);
animateFireworks();
