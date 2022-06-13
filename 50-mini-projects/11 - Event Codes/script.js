window.addEventListener("keydown", (e) => {
  document.querySelector(".output-container").style.display = "flex";
  document.querySelector(".input-container").style.display = "none";
  document.querySelector(".key .value").innerText = e.key;
  document.querySelector(".key-code .value").innerText = e.keyCode;
  document.querySelector(".code .value").innerText = e.code;
});
