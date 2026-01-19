/* ===== ĐẾM NGƯỢC ===== */
const tet = new Date("2026-02-17T00:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const d = tet - now;
  if (d <= 0) return;

  days.innerText = Math.floor(d / 86400000);
  hours.innerText = Math.floor(d / 3600000 % 24);
  minutes.innerText = Math.floor(d / 60000 % 60);
  seconds.innerText = Math.floor(d / 1000 % 60);
}, 1000);

/* ===== NHẠC ===== */
const music = document.getElementById("music");
musicBtn.onclick = () => music.paused ? music.play() : music.pause();

/* ===== HOA RƠI ===== */
const flowers = document.querySelector(".flowers");
const icons = ["🌸","🌼","🌺"];

for (let i = 0; i < 35; i++) {
  const f = document.createElement("span");
  f.innerText = icons[Math.floor(Math.random() * icons.length)];
  f.style.left = Math.random() * 100 + "vw";
  f.style.animationDuration = 5 + Math.random() * 6 + "s";
  flowers.appendChild(f);
}

/* ===== PHÁO HOA ===== */
const c = fireworks;
const ctx = c.getContext("2d");

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
addEventListener("resize", resize);

setInterval(() => {
  ctx.clearRect(0,0,c.width,c.height);
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(Math.random()*c.width, Math.random()*c.height/2, 3, 0, Math.PI*2);
    ctx.fill();
  }
}, 600);
