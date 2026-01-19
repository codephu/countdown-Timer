/* ================= TẾT ÂM LỊCH ================= */
const tetList = {
  2026: { date: "2026-02-17", name: "Bính Ngọ" },
  2027: { date: "2027-02-06", name: "Đinh Mùi" },
  2028: { date: "2028-01-26", name: "Mậu Thân" },
  2029: { date: "2029-02-13", name: "Kỷ Dậu" },
  2030: { date: "2030-02-03", name: "Canh Tuất" }
};

function getNextTet() {
  const now = new Date();
  for (const y in tetList) {
    const d = new Date(tetList[y].date);
    if (d > now) return { year: y, ...tetList[y] };
  }
}

const tet = getNextTet();
document.getElementById("lunarYear").innerText =
  `Năm ${tet.name} (${tet.year})`;

function updateCountdown() {
  const now = new Date();
  const target = new Date(tet.date);
  const diff = target - now;

  if (diff <= 0) return;

  days.innerText = Math.floor(diff / 86400000);
  hours.innerText = Math.floor(diff / 3600000) % 24;
  minutes.innerText = Math.floor(diff / 60000) % 60;
  seconds.innerText = Math.floor(diff / 1000) % 60;
}

setInterval(updateCountdown, 1000);

/* ================= LÌ XÌ ================= */
const lixi = document.getElementById("lixi");
setInterval(() => {
  const span = document.createElement("span");
  span.innerText = "🧧";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 3 + Math.random() * 4 + "s";
  lixi.appendChild(span);
  setTimeout(() => span.remove(), 7000);
}, 350);

/* ================= PHÁO HOA ================= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

function firework() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2,
      2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
  }
}

setInterval(firework, 600);
