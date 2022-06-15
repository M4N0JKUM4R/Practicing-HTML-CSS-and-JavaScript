const text = "Programming is crazy";
const textEl = document.querySelector(".text");
const textArray = text.split("");
const inputRangeEl = document.querySelector("input");
let speedVal;
let interval;
let i = 0;

const updateLetter = () => {
  textEl.innerHTML += `<span>${textArray[i]}</span>`;
  if (i == textArray.length) {
    clearInterval(interval);
    reset();
    return;
  }
  i++;
};

interval = setInterval(updateLetter, 500);

inputRangeEl.addEventListener("input", () => {
  speedVal = inputRangeEl.value;
  intervalSpeed = 500 * speedVal;
  reset();
  interval = setInterval(updateLetter, intervalSpeed);
});

const reset = () => {
  i = 0;
  textEl.innerHTML = "";
};
