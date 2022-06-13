const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    pauseAll();
    button.querySelector("audio").play();
  });
});

const pauseAll = () => {
  buttons.forEach((button) => {
    button.querySelector("audio").pause();
  });
};
