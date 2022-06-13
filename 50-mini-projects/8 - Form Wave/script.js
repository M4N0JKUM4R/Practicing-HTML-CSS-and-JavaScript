// const convertStrings = (element) => {
//   let label = document.querySelector(`.label.${element}`);
//   console.log(label);
//   let labelText = Array.from(label.innerText);

//   console.log(labelText);

//   const newArray = labelText.map((el) => `<span class="letter">${el}</span>`);

//   console.log(newArray);
//   label.innerHTML = "";
//   newArray.forEach((el) => {
//     label.innerHTML += el;
//   });
// };

// convertStrings("email-label");
// convertStrings("password-label");

// let alphabets = document.querySelectorAll(".letter");

// document.querySelector("input").addEventListener("click", () => {
//   let i = 0;
//   const upAlphabets = () => {
//     console.log(alphabets[i]);
//     if (i === alphabets.length - 1) {
//       clearInterval(intervalId);
//     }
//     alphabets[i].classList.add("test");
//     i++;
//   };

//   let intervalId = setInterval(upAlphabets, 100);
// });

const labels = document.querySelectorAll(".label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => {
      return `<span class="letter" style="transition-delay:${
        index * 100
      }ms">${letter}</span>`;
    })
    .join("");
});
