// Get the elements

const images = document.querySelectorAll(".images-container .image");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    removeClasses(); // Remove all active classes from images
    e.currentTarget.classList.add("active"); // Add only to the current clicked image
  });
});

const removeClasses = () => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
};
