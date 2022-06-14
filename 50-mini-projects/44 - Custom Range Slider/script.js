const inputRange = document.querySelector("input[type='range']");
const rangeNumberEl = document.querySelector(".range-number");
inputRange.addEventListener("input", (e) => {
  rangeNumberEl.innerText = e.target.value;
  console.log(inputRange.offsetWidth);
  rangeNumberEl.style.left = `${e.target.value * 2.7}px`;
  console.log(e.target.value);
});

rangeNumberEl.innerText = inputRange.value;
rangeNumberEl.style.left = `${inputRange.value * 2.7}px`;
