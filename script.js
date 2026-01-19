/* ===== ĐẾM NGƯỢC ===== */
const tetDate = new Date("2026-02-17T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = tetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor(diff / (1000 * 60 * 60) % 24);
  document.getElementById("minutes").innerText = Math.floor(diff / (1000 * 60) % 60);
  document.getElementById("seconds").innerText = Math.floor(diff / 1000 % 60);
}, 1000);

/* ===== NHẠC ===== */
const music = document.getElementById("music");
document.getElementById("musicBtn").onclick = () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
};

/* ===== HOA MAI / ĐÀO ===== */
const flowers = document.querySelector(".flowers");
const icons = ["🌸","🌼","🌺","🌸","🌼"];

for (let i = 0; i < 40; i++) {
  const f = document.createElement("span");
  f.innerText = icons[Math.floor(Math.random() * icons.length)];
  f.style.left = Math.random() * 100 + "vw";
  f.style.animationDuration = 5 + Math.random() * 5 + "s";
  flowers.appendChild(f);
}

/* ===== PHÁO HOA ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = `hsl(${Math.random() * 360},100%,60%)`;

  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  firework();
}, 700);
