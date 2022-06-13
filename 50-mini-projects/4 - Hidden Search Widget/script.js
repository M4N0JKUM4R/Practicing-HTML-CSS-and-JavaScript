const input = document.querySelector("input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  input.classList.toggle("active");
});
