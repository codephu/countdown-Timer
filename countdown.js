/* ===== HOA MAI / HOA ĐÀO ===== */
const flowerContainer = document.querySelector(".flowers");
const flowerIcons = ["🌸", "🌼", "🌺", "🧧"];

for (let i = 0; i < 25; i++) {
  const span = document.createElement("span");
  span.textContent = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  span.style.opacity = Math.random();
  flowerContainer.appendChild(span);
}

/* ===== PHÁO HOA ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

function firework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const radius = 2 + Math.random() * 3;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
  ctx.fill();
}

setInterval(firework, 80);

/* ===== NHẠC TẾT ===== */
const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔇 Tắt nhạc";
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Bật nhạc Tết";
  }
};
