// Get the elements

const toggleMenu = document.querySelector(".toggle .menu");
const toggleClose = document.querySelector(".toggle .close");
const main = document.querySelector("main");
const article = document.querySelector("article");
const nav = document.querySelector("nav");
const floatingMenu = document.querySelector(".floating-menu");

toggleMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.add("active");
  toggleClose.classList.add("active");
  article.classList.toggle("transform");
  nav.classList.toggle("transform");
  floatingMenu.classList.toggle("active");
});

toggleClose.addEventListener("click", (e) => {
  e.currentTarget.classList.remove("active");
  toggleMenu.classList.remove("active");
  article.classList.toggle("transform");
  nav.classList.toggle("transform");
  floatingMenu.classList.toggle("active");
});
