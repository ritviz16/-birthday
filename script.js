let screens = document.querySelectorAll(".screen");
let index = 0;
let music = document.getElementById("bgMusic");

function next() {
  screens[index].classList.remove("active");
  index++;
  if (index < screens.length) {
    screens[index].classList.add("active");
  }
}

function startMusic() {
  music.play();
  next();
}

function openLetter() {
  next();
}

/* Floating Hearts */
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "floatUp 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 600);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-120vh); opacity: 0; }
}`;
document.head.appendChild(style);
