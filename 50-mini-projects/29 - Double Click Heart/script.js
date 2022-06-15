const image = document.querySelector(".image");
const likes = document.querySelector(".likes-count");
let count = 0;
image.addEventListener("dblclick", (e) => {
  console.log("Image");
  count++;
  likes.innerText = `${count}`;
  createHeart(e);
});

const createHeart = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;

  document.body.appendChild(heart);

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  setTimeout(() => {
    heart.remove();
  }, 2000);
  console.log(e);
};
