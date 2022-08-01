const canvasEl = document.querySelector("canvas");
const sizeEl = document.querySelector(".font-size .font-size-input");
const colorEl = document.querySelector(".color .color-input");
const clearEl = document.querySelector(".reset button");
const objects = document.querySelector(".objects");
const elements = objects.querySelectorAll("div");

const ctx = canvasEl.getContext("2d");

let isPressed = false;
let size = 3;
let color = "#000000";
let type = "line";

let x;
let y;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvasEl.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    type === "circle" ? drawCircle(x2, y2) : drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

sizeEl.addEventListener("input", (e) => {
  size = e.target.value;
});

colorEl.addEventListener("input", (e) => {
  color = e.target.value;

  elements.forEach((el) => {
    el.style.fill = color;
  });
});

elements.forEach((el) => {
  el.addEventListener("click", (e) => {
    const className = e.currentTarget.classList[0];
    switch (className) {
      case "circle":
        type = "circle";
        break;
      case "line":
        type = "line";
        break;
    }
  });
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
});
