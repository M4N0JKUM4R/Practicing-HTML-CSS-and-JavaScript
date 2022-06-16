const navToggle = document.querySelector(".menu-toggle");
const menus = document.querySelectorAll(".menu");
const close = document.querySelector(".close-icon");

navToggle.addEventListener("click", () => {
  menus.forEach((menu, index) => {
    menu.classList.add("active");
    menu.style.transitionDelay = `${index * 0.5}s`;
  });

  navToggle.style.visibility = "hidden";
});

close.addEventListener("click", () => {
  for (let i = menus.length; i >= 1; i--) {
    menus[i - 1].classList.remove("active");
    menus[i - 1].style.transitionDelay = `${0.5 / i}s`;
  }
  setTimeout(() => {
    navToggle.style.visibility = "visible";
  }, 1000);
});
