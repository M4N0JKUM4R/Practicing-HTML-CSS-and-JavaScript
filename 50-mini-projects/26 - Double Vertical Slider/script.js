const up = document.querySelector(".up");
const down = document.querySelector(".down");
const detailsSection = document.querySelector(".details-section");
const sections = document.querySelectorAll(".section");
const imagesSection = document.querySelector(".images");
const images = document.querySelectorAll(".image");

const colors = ["#fbb034", "#0077c8", "#00a98f", "#48a9c5"];
const imagesURL = [
  "https://images.unsplash.com/photo-1655301884885-4422bc91e0df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1655249323557-3d016d11c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  "https://images.unsplash.com/photo-1655303717491-37a6e5a47bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1655305092738-aeff5eff2168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
];
let index = 0;

sections.forEach((section, index) => {
  sections[index].style.backgroundColor = colors[index];
});

images.forEach((image, index) => {
  images[index].style.backgroundImage = `url(${imagesURL[index]})`;
});

down.addEventListener("click", () => {
  index++;
  if (index >= sections.length) {
    console.log("Check");
    index = 0;
  }
  imageIndex = sections.length - index;
  if (imageIndex >= sections.length) {
    imageIndex = 0;
  }
  detailsSection.style.top = `-${sections[index].offsetTop}px`;
  imagesSection.style.top = `-${images[imageIndex].offsetTop}px`;
});

up.addEventListener("click", () => {
  if (index <= 0) {
    console.log("Check");
    index = sections.length - 1;
  } else {
    index--;
  }
  imageIndex = sections.length - index;
  console.log(imageIndex);
  if (imageIndex >= sections.length) {
    imageIndex = 0;
  }
  detailsSection.style.top = `-${sections[index].offsetTop}px`;
  imagesSection.style.top = `-${images[imageIndex].offsetTop}px`;
});
