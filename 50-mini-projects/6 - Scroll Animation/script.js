// Testing other solutions but not used to it

// let options = {
//   root: null,
//   threshold: "1.0",
// };

// let observer = new IntersectionObserver(scrollFunc, options);

// function scrollFunc(entries, observer) {
//   console.log(entries);
//   entries.forEach((element) => {
//     console.log(element.isIntersecting);
//     if (element.isIntersecting == true) {
//       document
//         .querySelector(".box:nth-child(10)")
//         .classList.add("move-from-left");
//     } else {
//       document
//         .querySelector(".box:nth-child(10)")
//         .classList.replace("move-from-left", "");
//     }
//   });
// }

// observer.observe(document.querySelector(".box:nth-child(4)"));
// let boxes = document.querySelectorAll(".box");
// window.addEventListener("scroll", scrollFunc);

// function scrollFunc() {
//   boxes.forEach((box, index) => {
//     let boxProp = box.getBoundingClientRect();
//     triggerBottom = (window.innerHeight / 5) * 4;
//     console.log("Box prop top", boxProp.top);

//     if (boxProp.top < triggerBottom) {
//       console.log("Passing");
//       box.classList.add("move-from-left");
//     } else {
//       box.classList.remove("move-from-left");
//     }
//   });
// }

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
