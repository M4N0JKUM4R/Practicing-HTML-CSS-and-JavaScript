const box = document.querySelector(".box");

function showBox() {
  box.classList.remove("animated");
}

setTimeout(showBox, 3000);
