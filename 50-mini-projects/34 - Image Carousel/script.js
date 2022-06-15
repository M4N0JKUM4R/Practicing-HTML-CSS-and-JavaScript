const prevBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");
const imagesEl = document.querySelector(".images");
const images = document.querySelectorAll(".image");

let index = 1;

let interval = setInterval(moveImages, 2000);

function moveImages() {
  changeImage();
  index++;
}

function changeImage() {
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  imagesEl.style.transform = `translateX(-${index * 500}px)`;
}

prevBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(moveImages, 2000);
}
