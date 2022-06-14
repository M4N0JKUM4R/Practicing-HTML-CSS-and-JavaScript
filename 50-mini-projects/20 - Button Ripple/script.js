const button = document.querySelector(".button");
const container = document.querySelector(".container");
document.body.addEventListener("click", (e) => {
  console.log("Clicked");
  const screenX = e.clientX;
  const screenY = e.clientY;

  const top = e.target.offsetTop;
  const left = e.target.offsetLeft;

  console.log({ top });
  console.log({ left });

  const newX = screenX - left;
  const newY = screenY - top;

  const circle = document.createElement("span");

  circle.classList.add("circle");

  circle.style.top = `${newY}px`;
  circle.style.left = `${newX}px`;
  button.appendChild(circle);
  const removeFn = () => {
    circle.remove();
  };

  setTimeout(removeFn, 1000);
});
