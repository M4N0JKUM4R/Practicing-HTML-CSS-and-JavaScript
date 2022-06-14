const selectEl = document.querySelectorAll(".select-element");
const goodEl = document.querySelector(".good");
const cheapEl = document.querySelector(".cheap");
const fastEl = document.querySelector(".fast");
selectEl.forEach((select) => {
  select.addEventListener("click", (e) => {
    toggle(select, e.target);
  });
});

const toggle = (select, clickedEl) => {
  select.classList.toggle("selected");
  console.log(clickedEl);

  if (
    goodEl.classList.contains("selected") &&
    cheapEl.classList.contains("selected") &&
    fastEl.classList.contains("selected")
  ) {
    if (clickedEl.classList.contains("good")) {
      cheapEl.classList.remove("selected");
    } else if (clickedEl.classList.contains("cheap")) {
      fastEl.classList.remove("selected");
    } else if (fastEl.classList.contains("fast")) {
      goodEl.classList.remove("selected");
    }
  }
};
