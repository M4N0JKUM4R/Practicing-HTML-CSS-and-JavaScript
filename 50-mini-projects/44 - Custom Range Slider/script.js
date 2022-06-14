const inputRange = document.querySelector("input[type='range']");
const rangeNumberEl = document.querySelector(".range-number");

console.log(inputRange.offsetWidth);
console.log(inputRange.max);
inputRange.addEventListener("input", (e) => {
  rangeNumberEl.innerText = e.target.value;
  let width =
    (e.target.value * inputRange.offsetWidth) / 100 -
    rangeNumberEl.offsetWidth / 2;
  rangeNumberEl.style.left = `${width}px`;
});

rangeNumberEl.innerText = inputRange.value;
rangeNumberEl.style.left = `${inputRange.value * 2.6}px`;
