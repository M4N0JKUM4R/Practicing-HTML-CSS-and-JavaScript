let passwordEl = document.querySelector(".password");
let containerEl = document.querySelector(".container");

passwordEl.addEventListener("input", (e) => {
  passScore(e.target.value);
});

// Logic partially based on http://jsfiddle.net/HFMvX/ which would not pass the pattern test. There are other methods to implement: https://www.npmjs.com/package/check-password-strength

function passScore(value) {
  let score = 0;
  const valueArray = value.split("");

  for (let i = 0; i < valueArray.length; i++) {
    score += 5;
  }

  let variations = {
    digit: /\d/.test(value),
    lower: /[a-z]/.test(value),
    upper: /[A-Z]/.test(value),
    nonWord: /\W/.test(value),
  };

  let variationCount = 0;

  for (let check in variations) {
    variationCount += variations[check] === true ? 1 : 0;
  }

  score += variationCount * 10;
  console.log("Variation Count", variationCount);
  console.log("Score", score);

  let ratio = 100;
  let blurValue = ratio / score;
  containerEl.style.filter = `blur(${blurValue < 1 ? 0 : blurValue}px)`;
}
