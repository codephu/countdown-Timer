/* ================== TẾT ÂM LỊCH ================== */
const tetDates = {
  2026: { date: "2026-02-17", name: "Bính Ngọ" },
  2027: { date: "2027-02-06", name: "Đinh Mùi" },
  2028: { date: "2028-01-26", name: "Mậu Thân" },
  2029: { date: "2029-02-13", name: "Kỷ Dậu" },
  2030: { date: "2030-02-03", name: "Canh Tuất" }
};

function getNextTet() {
  const now = new Date();
  for (const y in tetDates) {
    const d = new Date(tetDates[y].date);
    if (d > now) return { year: y, ...tetDates[y] };
  }
}

const tet = getNextTet();
document.getElementById("lunarYear").innerText =
  `Năm ${tet.name} (${tet.year})`;

function countdown() {
  const now = new Date();
  const target = new Date(tet.date);
  const diff = target - now;

  if (diff <= 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
setInterval(countdown, 1000);

/* ================== LÌ XÌ BAY ================== */
const lixiBox = document.getElementById("lixi-container");
setInterval(() => {
  const span = document.createElement("span");
  span.innerText = "🧧";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 3 + Math.random() * 4 + "s";
  lixiBox.appendChild(span);
  setTimeout(() => span.remove(), 7000);
}, 400);

/* ================== PHÁO HOA ================== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function firework(x, y) {
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  firework(
    Math.random() * canvas.width,
    Math.random() * canvas.height / 2
  );
}, 600);
