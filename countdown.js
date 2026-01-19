/* ===== PHÁO HOA NỔ THẬT ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 0.5;
    this.particles = [];
    this.color = `hsl(${Math.random() * 360},100%,60%)`;

    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: this.x,
        y: this.y,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 4 + 2,
        alpha: 1
      });
    }
  }

  update() {
    this.particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= 0.02;
    });
  }

  draw() {
    this.particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }
}

let fireworks = [];

setInterval(() => {
  fireworks.push(new Firework());
}, 900);

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, index) => {
    fw.update();
    fw.draw();
    if (fw.particles[0].alpha <= 0) fireworks.splice(index, 1);
  });
  requestAnimationFrame(animateFireworks);
}
animateFireworks();
