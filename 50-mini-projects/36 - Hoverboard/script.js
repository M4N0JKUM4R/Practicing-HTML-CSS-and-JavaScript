const NUMBER_OF_ELEMENTS = 1000;
const NUMBER_OF_COLUMNS = 50;

const container = document.querySelector(".container");

let colors = ["f38654", "f5df2e", "56c1ab", "0064d2"];

for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  container.appendChild(newBox);
  newBox.addEventListener("mouseover", () => {
    let i = Math.floor(Math.random() * colors.length);
    newBox.style.backgroundColor = `#${colors[i]}`;
    setTimeout(() => {
      newBox.style.backgroundColor = "#1d1d1d";
    }, 1000);
  });
}

container.style.gridTemplateColumns = `repeat(${NUMBER_OF_COLUMNS}, 1fr)`;
