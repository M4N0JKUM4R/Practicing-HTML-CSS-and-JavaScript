const headerContainerEl = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    headerContainerEl.classList.add("active");
  } else {
    headerContainerEl.classList.remove("active");
  }
});
