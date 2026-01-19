/* ================= COUNTDOWN ================= */
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearSolarEl = document.getElementById("yearSolar");
const yearLunarEl = document.getElementById("yearLunar");

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
    const diff = target - new Date();
    daysEl.textContent = Math.floor(diff / 86400000);
    hoursEl.textContent = Math.floor(diff / 3600000 % 24).toString().padStart(2,"0");
    minutesEl.textContent = Math.floor(diff / 60000 % 60).toString().padStart(2,"0");
    secondsEl.textContent = Math.floor(diff / 1000 % 60).toString().padStart(2,"0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ================= MUSIC (FIXED) ================= */
const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

musicBtn.onclick = async () => {
    try {
        if (!playing) {
            await music.play();
            musicBtn.textContent = "🔇 Tắt nhạc Tết";
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Bật nhạc Tết";
        }
        playing = !playing;
    } catch (e) {
        alert("⚠️ Trình duyệt chặn nhạc, vui lòng bấm lại!");
    }
};

/* ================= HOA MAI / HOA ĐÀO ================= */
const flowerCanvas = document.getElementById("flowers");
const fctx = flowerCanvas.getContext("2d");
flowerCanvas.width = innerWidth;
flowerCanvas.height = innerHeight;

const flowers = [];
const emojis = ["🌸", "🌼"];

for (let i = 0; i < 40; i++) {
    flowers.push({
        x: Math.random() * flowerCanvas.width,
        y: Math.random() * flowerCanvas.height,
        speed: 1 + Math.random() * 2,
        size: 18 + Math.random() * 12,
        emoji: emojis[Math.floor(Math.random()*2)]
    });
}

function drawFlowers() {
    fctx.clearRect(0,0,flowerCanvas.width,flowerCanvas.height);
    flowers.forEach(f => {
        fctx.font = `${f.size}px serif`;
        fctx.fillText(f.emoji, f.x, f.y);
        f.y += f.speed;
        if (f.y > flowerCanvas.height) {
            f.y = -20;
            f.x = Math.random() * flowerCanvas.width;
        }
    });
    requestAnimationFrame(drawFlowers);
}
drawFlowers();
