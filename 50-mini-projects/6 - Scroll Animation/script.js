const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollfunc);

scrollfunc();
function scrollfunc() {
  const triggerBottom = window.innerHeight;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
