let screens = document.querySelectorAll(".screen");
let index = 0;
let music = document.getElementById("music");

function next() {
  screens[index].classList.remove("active");
  index++;
  if (index < screens.length) {
    screens[index].classList.add("active");
  }
}

function openLetter() {
  next();
}

document.querySelector("button").addEventListener("click", () => {
  music.play();
});
