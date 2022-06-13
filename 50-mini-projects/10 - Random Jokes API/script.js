const content = document.querySelector(".content");
const button = document.querySelector("button");

const fetchJokes = async () => {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      createJoke(data);
    })
    .catch((err) => console.log(err));
};

fetchJokes();

const createJoke = (data) => {
  if (data.type == "twopart") {
    let setup = data.setup;
    let delivery = data.delivery;
    content.innerHTML = `<div class="setup">${setup}</div><div class="delivery">${delivery}</div>`;
  } else if (data.type == "single") {
    content.innerHTML = `<div class="single">${data.joke}</div>`;
  }
};

button.addEventListener("click", () => {
  fetchJokes();
});
