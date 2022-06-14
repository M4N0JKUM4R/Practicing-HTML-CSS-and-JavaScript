const images = document.querySelectorAll(".image");

images.forEach((image) => {
  let i = Math.floor(Math.random() * 9);
  let j = Math.floor(Math.random() * 9);
  image.innerHTML = `<img src="https://source.unsplash.com/random/30${i}x30${j}" />`;
});
