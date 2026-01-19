/* ====== ĐẾM NGƯỢC TẾT ====== */
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const lunarYearText = document.getElementById("lunarYear");

const lunarNewYears = [
  { date: new Date("2026-02-17T00:00:00+07:00"), name: "Bính Ngọ 2026" },
  { date: new Date("2027-02-06T00:00:00+07:00"), name: "Đinh Mùi 2027" },
  { date: new Date("2028-01-26T00:00:00+07:00"), name: "Mậu Thân 2028" },
  { date: new Date("2029-02-13T00:00:00+07:00"), name: "Kỷ Dậu 2029" },
  { date: new Date("2030-02-03T00:00:00+07:00"), name: "Canh Tuất 2030" }
];

function getNextLunar() {
  return lunarNewYears.find(y => y.date > new Date());
}

let target = getNextLunar();

function updateCountdown() {
  if (!target) return;
  const diff = target.date - new Date();
  if (diff <= 0) {
    target = getNextLunar();
    return;
  }

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = Math.floor(diff / 3600000) % 24;
  minutes.textContent = Math.floor(diff / 60000) % 60;
  seconds.textContent = Math.floor(diff / 1000) % 60;
  lunarYearText.textContent = `Đếm ngược Tết Âm lịch ${target.name}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ====== HOA RƠI ====== */
const flowerBox = document.querySelector(".flowers");
["🌸","🌼","🌺","🧧"].forEach(() => {});
for (let i = 0; i < 35; i++) {
  const f = document.createElement("span");
  f.textContent = ["🌸","🌼","🌺","🧧"][Math.floor(Math.random()*4)];
  f.style.left = Math.random()*100+"vw";
  f.style.fontSize = 20+Math.random()*20+"px";
  f.style.animationDuration = 6+Math.random()*6+"s";
  flowerBox.appendChild(f);
}

/* ====== PHÁO HOA NỔ ====== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize(); window.onresize = resize;

class Firework {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height/2;
    this.particles = Array.from({length:50},()=>({
      x:this.x,y:this.y,
      a:Math.random()*Math.PI*2,
      s:Math.random()*4+2,
      o:1
    }));
    this.color = `hsl(${Math.random()*360},100%,60%)`;
  }
  update() {
    this.particles.forEach(p=>{
      p.x+=Math.cos(p.a)*p.s;
      p.y+=Math.sin(p.a)*p.s;
      p.o-=0.02;
    });
  }
  draw() {
    this.particles.forEach(p=>{
      ctx.globalAlpha=p.o;
      ctx.fillStyle=this.color;
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha=1;
  }
}
let fireworks=[];
setInterval(()=>fireworks.push(new Firework()),900);
(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  fireworks.forEach((f,i)=>{
    f.update(); f.draw();
    if(f.particles[0].o<=0) fireworks.splice(i,1);
  });
  requestAnimationFrame(animate);
})();

/* ====== NHẠC TẾT ====== */
const music = document.getElementById("tetMusic");
const musicBtn = document.getElementById("musicBtn");
const playlist = [
  "https://files.catbox.moe/6z9v7w.mp3",
  "https://files.catbox.moe/8qv2h0.mp3"
];
let track = 0;
music.src = playlist[track];
music.onended = () => {
  track = (track+1)%playlist.length;
  music.src = playlist[track];
  music.play();
};
musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent="🔇 Tắt nhạc";
  } else {
    music.pause();
    musicBtn.textContent="🔊 Bật nhạc Tết";
  }
};
