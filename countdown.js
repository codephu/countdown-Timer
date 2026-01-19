const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const lunarYearText = document.getElementById("lunarYear");

/* Tết Âm lịch (giờ Việt Nam UTC+7) */
const lunarNewYears = [
  { date: new Date("2026-02-17T00:00:00+07:00"), name: "Bính Ngọ 2026" },
  { date: new Date("2027-02-06T00:00:00+07:00"), name: "Đinh Mùi 2027" },
  { date: new Date("2028-01-26T00:00:00+07:00"), name: "Mậu Thân 2028" },
  { date: new Date("2029-02-13T00:00:00+07:00"), name: "Kỷ Dậu 2029" },
  { date: new Date("2030-02-03T00:00:00+07:00"), name: "Canh Tuất 2030" }
];

function getNextLunarNewYear() {
  const now = new Date();
  return lunarNewYears.find(item => item.date > now) || null;
}

let target = getNextLunarNewYear();

function updateCountdown() {
  if (!target) return;

  const now = new Date();
  const diff = target.date - now;

  if (diff <= 0) {
    target = getNextLunarNewYear();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.textContent = d;
  hours.textContent = h.toString().padStart(2, "0");
  minutes.textContent = m.toString().padStart(2, "0");
  seconds.textContent = s.toString().padStart(2, "0");

  lunarYearText.textContent = `Đếm ngược Tết Âm lịch ${target.name}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
