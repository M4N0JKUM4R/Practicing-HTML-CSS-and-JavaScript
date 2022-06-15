const startBtn = document.querySelector(".start-screen button");
const insectsEl = document.querySelectorAll(".insect");
const startScreen = document.querySelector(".start-screen");
const selectionScreen = document.querySelector(".selection-screen");
const gameScreen = document.querySelector(".game-screen");
const timerEl = document.querySelector(".timer");
const scoreEl = document.querySelector(".score");
const insects = [
  {
    name: "Fly",
    url: "https://pngimg.com/uploads/fly/fly_PNG3946.png",
  },
  {
    name: "Mosquito",
    url: "https://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  },
  {
    name: "Spider",
    url: "https://pngimg.com/uploads/spider/spider_PNG12.png",
  },
  {
    name: "Roach",
    url: "https://pngimg.com/uploads/roach/roach_PNG12163.png",
  },
];

startBtn.addEventListener("click", () => {
  startScreen.classList.add("move-up");
  selectionScreen.classList.add("move-up");
});

insectsEl.forEach((insect, index) => {
  insect.setAttribute("data-name", insects[index].name);
  insect.addEventListener("click", (e) => {
    selectionScreen.classList.add("move-up-2x");
    gameScreen.classList.add("move-up-2x");
    setInterval(startTimer, 1000);
    console.log(e.target);
    createInsects(e.target.closest(".insect").getAttribute("data-name"));
  });
});

let seconds = 0;
let minutes = 0;

function startTimer() {
  seconds++;
  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 59) {
    minutes = 0;
  }
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  timerEl.innerText = `Time: ${minutes}:${seconds}`;
}

let score = 0;

function createInsects(insectName) {
  console.log(insectName);

  const index = insects.findIndex((insect) => insect.name === insectName);
  console.log({ index });

  let left = Math.floor(Math.random() * window.screen.width);
  let top = Math.floor(Math.random() * window.screen.height);

  let insect = document.createElement("div");
  insect.classList.add("insect-game");
  insect.innerHTML = `<img src="${insects[index].url}" />`;
  gameScreen.append(insect);

  insect.style.left = `${left}px`;
  insect.style.top = `${top}px`;

  insect.addEventListener("click", () => {
    score++;
    scoreEl.innerText = `Score: ${score}`;
    insect.remove();
    setTimeout(() => {
      createInsects(insectName);
    }, 1000);
    setTimeout(() => {
      createInsects(insectName);
    }, 2000);
  });
}
