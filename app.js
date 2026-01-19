<script>
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

/* Danh sách Tết Âm lịch (Giờ VN UTC+7) */
const lunarNewYears = {
  2026: new Date("2026-02-17T00:00:00+07:00"),
  2027: new Date("2027-02-06T00:00:00+07:00"),
  2028: new Date("2028-01-26T00:00:00+07:00"),
  2029: new Date("2029-02-13T00:00:00+07:00"),
  2030: new Date("2030-02-03T00:00:00+07:00"),
};

/* Lấy Tết Âm lịch gần nhất trong tương lai */
function getNextLunarNewYear() {
  const now = new Date();
  for (const year in lunarNewYears) {
    if (lunarNewYears[year] > now) {
      return lunarNewYears[year];
    }
  }
  return null;
}

let targetTime = getNextLunarNewYear();

/* Update countdown */
function updateCountdown() {
  if (!targetTime) return;

  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) {
    targetTime = getNextLunarNewYear(); // tự chuyển sang năm sau
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h.toString().padStart(2, "0");
  minutes.innerHTML = m.toString().padStart(2, "0");
  seconds.innerHTML = s.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
</script>

