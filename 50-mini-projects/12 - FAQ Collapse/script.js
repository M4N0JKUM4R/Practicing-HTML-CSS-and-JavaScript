const arrowDown = document.querySelectorAll(".down");
const closeBtns = document.querySelectorAll(".close");

arrowDown.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    arrow.closest(".question").nextElementSibling.classList.remove("collapse");
    e.currentTarget.style.display = "none";
    e.currentTarget.nextElementSibling.style.display = "block";
    e.currentTarget.closest(".faq-box").classList.add("active");
  });
});

closeBtns.forEach((close) => {
  close.addEventListener("click", (e) => {
    close.closest(".question").nextElementSibling.classList.add("collapse");
    e.currentTarget.style.display = "none";
    e.currentTarget.previousElementSibling.style.display = "block";
    e.currentTarget.closest(".faq-box").classList.remove("active");
  });
});
