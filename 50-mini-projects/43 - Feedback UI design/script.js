const feedbackEl = document.querySelectorAll(".feedback");
const submitEl = document.querySelector("button");
const containerEl = document.querySelector(".container");

let check = false;

feedbackEl.forEach((el) => {
  el.addEventListener("click", () => {
    removeSelected();
    el.classList.add("selected");
    check = true;
    submitEl.classList.remove("disabled");
  });
});

const removeSelected = () => {
  feedbackEl.forEach((el) => {
    el.classList.remove("selected");
  });
};

const checkSelection = () => {
  console.log("Clicked");
  check = Array.from(feedbackEl).some((el) => {
    return el.classList.contains("selected");
  });
};

function submitEvent() {
  if (check === false) {
    console.log("No selection made");
    return;
  }

  const feedbackValue = document.querySelector(".selected .text").innerHTML;
  containerEl.innerHTML = `<div class="header-result">
      <div class="smiley heart">🧡</div>
      <div class="feedback-text">Thank you for the feedback</div>
    </div>
    <div class="message">
      <span style="font-weight: bold;">Feedback:</span> ${feedbackValue}
    </div>
    <div class="footer">We'll use your message for improving ourselves</div>`;
}

submitEl.addEventListener("click", submitEvent);
