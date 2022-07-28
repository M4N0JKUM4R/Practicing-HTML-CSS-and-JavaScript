const NUMBER_OF_CHARACTERS = 6;

const numbersEl = document.querySelector(".numbers");
const headerEl = document.querySelector(".header");
const buttonEl = document.querySelector("button");

for (i = 0; i < NUMBER_OF_CHARACTERS; i++) {
  const numberEl = document.createElement("div");
  numberEl.classList.add("number");
  numberEl.innerHTML = `<input type="number" class="input-code" min="0" max="9" placeholder="0" />`;

  headerEl.innerHTML = `We have sent you the ${NUMBER_OF_CHARACTERS} digit code to your email ID`;

  numberEl.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      console.log(e.target);
      e.target.value = "";
      e.target.classList.add("filled");
      setTimeout(() => {
        if (numberEl.closest(".number").nextElementSibling) {
          numberEl
            .closest(".number")
            .nextElementSibling.querySelector("input")
            .focus();
        }
      }, 10);
    }
    if (e.key === "Backspace") {
      console.log(e.target);
      e.target.value = "";
      e.target.classList.remove("filled");
      setTimeout(() => {
        if (numberEl.closest(".number").previousElementSibling) {
          numberEl
            .closest(".number")
            .previousElementSibling.querySelector("input")
            .focus();
        }
      }, 10);
    }
    let filledStatus = checkIfAllFilled();

    if (filledStatus === true) {
      buttonEl.classList.add("enable");
    } else {
      buttonEl.classList.remove("enable");
    }
  });

  numbersEl.append(numberEl);
}

numbersEl.querySelector("input").focus();

function checkIfAllFilled() {
  const codeInputs = numbersEl.querySelectorAll("input");
  const codeArray = Array.from(codeInputs);
  console.log(codeArray);
  const isFilled = codeArray.every((el) => el.classList.contains("filled"));
  console.log(isFilled);
  return isFilled;
}
