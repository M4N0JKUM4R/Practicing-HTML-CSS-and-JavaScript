const bottlesEl = document.querySelectorAll(".bottle");
const filledOutEl = document.querySelector(".filled-out-space");
const leftOutEl = document.querySelector(".left-space");
const filledStatus = document.querySelector(".filled-out-space .status");
const unFilledStatus = document.querySelector(".left-space .status");

let bottlesCount = 0;
bottlesEl.forEach((bottle, index) => {
  bottle.setAttribute("id", index + 1);
  bottle.addEventListener("click", (e) => {
    updateBottles(e.target.getAttribute("id"));
    updateGoal(e.target.getAttribute("id"));
  });
});

const updateBottles = (count) => {
  removeSelected();
  for (let counter = 0; counter < count; counter++) {
    bottlesEl[counter].classList.add("selected");
  }
};
const removeSelected = () => {
  bottlesEl.forEach((bottle) => {
    bottle.classList.remove("selected");
  });
};

const updateGoal = (bottles) => {
  let filledflex = bottles;
  let notFilledflex = bottlesEl.length - filledflex;
  filledOutEl.style.flex = filledflex;
  leftOutEl.style.flex = notFilledflex;

  let filledlitres = filledflex * 250;
  let unfilledlitres = notFilledflex * 250;
  filledlitres =
    filledlitres >= 1000 ? `${filledlitres / 1000} L` : `${filledlitres} ml`;

  unfilledlitres =
    unfilledlitres >= 1000
      ? `${unfilledlitres / 1000} L`
      : `${unfilledlitres} ml`;

  filledStatus.innerText = `${filledlitres} filled`;
  unFilledStatus.innerText = `${unfilledlitres} remaining`;
};

updateGoal(0);
