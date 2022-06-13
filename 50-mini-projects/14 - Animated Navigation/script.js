const closeBtn = document.querySelector(".toggle .close");
const menuList = document.querySelector(".menu");
const barsBtn = document.querySelector(".toggle .bars");

console.log(barsBtn);

closeBtn.addEventListener("click", (e) => {
  menuList.classList.toggle("inactive");
  barsBtn.classList.toggle("inactive");
  e.currentTarget.classList.add("inactive");
});

barsBtn.addEventListener("click", (e) => {
  menuList.classList.toggle("inactive");
  barsBtn.classList.add("inactive");
  closeBtn.classList.remove("inactive");
});
