const imageParent = document.querySelector(".image");
const button = document.querySelector("button");

const NUMBER_OF_COLUMNS = 3;
const NUMBER_OF_ROWS = 3;
const IMAGE_SIZE = {
  width: imageParent.clientWidth,
  height: imageParent.clientHeight,
};

for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
  for (let j = 0; j < NUMBER_OF_ROWS; j++) {
    const imageEl = document.createElement("div");
    imageEl.classList.add("image-box");
    imageEl.style.backgroundPosition = `${
      (-j * IMAGE_SIZE.width) / NUMBER_OF_COLUMNS
    }px ${(-i * IMAGE_SIZE.height) / NUMBER_OF_ROWS}px`;
    imageParent.append(imageEl);
  }
}

button.addEventListener("click", () => {
  imageParent.classList.toggle("expand");
});

window.addEventListener("scroll", () => {
  console.log(imageParent.clientHeight);
  let IMAGE_SIZE = {
    width: imageParent.clientWidth,
    height: imageParent.clientHeight,
  };

  for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
    for (let j = 0; j < NUMBER_OF_ROWS; j++) {
      const imageEl = document.createElement("div");
      imageEl.classList.add("image-box");
      imageEl.style.backgroundPosition = `${
        (-j * IMAGE_SIZE.width) / NUMBER_OF_COLUMNS
      }px ${(-i * IMAGE_SIZE.height) / NUMBER_OF_ROWS}px`;
      imageParent.append(imageEl);
    }
  }
});
