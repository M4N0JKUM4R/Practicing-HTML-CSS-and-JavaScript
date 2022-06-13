// Get the elements

const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector("button.next");
const prevBtn = document.querySelector("button.previous");
const progressBar = document.querySelector(".progress-bar");

let current = 1;
nextBtn.addEventListener("click", () => {
  current++;
  console.log({ current });
  if (current > steps.length) {
    current = steps.length;
    console.log("Current from next", current);
  }
  update();
});

prevBtn.addEventListener("click", () => {
  current--;
  console.log({ current });
  if (current <= 0) {
    current = 1;
  }
  update();
});

const update = () => {
  for (let [i, step] of steps.entries()) {
    if (i <= current - 1) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  }

  progressBar.style.width = `${((current - 1) / (steps.length - 1)) * 100}%`;

  if (current === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (current >= steps.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
};
