const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let counter = 0;

const images = [
  "https://images.unsplash.com/photo-1655056556210-329e6742bb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",

  "https://images.unsplash.com/photo-1654797657947-cb8fc4de5eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

  "https://images.unsplash.com/photo-1654970209837-c5f100294796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",

  "https://images.unsplash.com/photo-1654475677192-2d869348bb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  "https://images.unsplash.com/photo-1653857329139-b233fbf7795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
];

const setImage = (image) => {
  document.body.style.backgroundImage = `url(${image})`;
  sliderContainer.style.backgroundImage = `url(${image})`;
};

setImage(images[0]);

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter <= 0) {
    counter = images.length - 1;
  }
  setImage(images[counter]);
  console.log("Previous button");
});

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter === images.length) {
    counter = 0;
  }
  setImage(images[counter]);
  console.log("Next button");
});
