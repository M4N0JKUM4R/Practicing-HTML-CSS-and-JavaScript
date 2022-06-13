const textArea = document.querySelector("textarea");
const resultsEl = document.querySelector(".results");

textArea.addEventListener("keyup", (e) => {
  updateResult(e.target.value);
  if (e.key === "Enter") {
    e.preventDefault();
    randomResult();
  }
});

const updateResult = (text) => {
  console.log(text);
  resultsEl.innerHTML = text
    .split(",")
    .map((el) => `<div class="option">${el}</div>`)
    .join("");
};

const randomResult = () => {
  let options = resultsEl.querySelectorAll(".option");
  let i = Math.floor(Math.random() * options.length);
  const choose = () => {
    options[i].classList.add("chosen");
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  let interval = setInterval(choose, 2000);
};
