const countdownEl = document.querySelector(".countdown");
const numberEl = document.querySelectorAll(".number");
const resultEl = document.querySelector(".final");
const resetEl = document.querySelector(".reset");

let NUMBER_OF_ELEMENTS = numberEl.length;

function addAnimation() {
  numberEl.forEach((el, index) => {
    let interval = [];
    interval[index] = setTimeout(() => {
      numberEl[index].classList.add("enter");
    }, index * 2000);
  });
}

addAnimation();

function showFinal() {
  countdownEl.classList.add("hidden");
  resultEl.querySelector(".final-message").classList.add("zoom");
  resultEl.classList.remove("hidden");
}

function showNumbers() {
  countdownEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
}

function removeClasses() {
  numberEl.forEach((el, index) => {
    el.classList.remove("enter");
  });
}

setTimeout(showFinal, NUMBER_OF_ELEMENTS * 2000);

resetEl.addEventListener("click", () => {
  removeClasses();
  showNumbers();
  addAnimation();
  setTimeout(showFinal, NUMBER_OF_ELEMENTS * 2000);
});
