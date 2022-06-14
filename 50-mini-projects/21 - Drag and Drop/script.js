const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");
const boxes = document.querySelectorAll(".box");

fill.addEventListener("dragstart", dragFillStart);
fill.addEventListener("dragend", dragComplete);

function dragFillStart() {
  console.log("Started");
}

function dragComplete(e) {
  this.classList.remove("hover");
}

empty.forEach((el) => {
  el.addEventListener("dragenter", enteringEmpty);
  el.addEventListener("dragleave", leavingDrag);
  el.addEventListener("dragover", overEmpty);
  el.addEventListener("drop", droppingItem);
});

function enteringEmpty(e) {
  e.preventDefault();
  console.log("Entering empty", e);
  console.log("This from Entering empty", this);
}

function leavingDrag(e) {
  e.preventDefault();
  console.log("This from leaving drag", this);
  this.classList.remove("hover");
}

function overEmpty(e) {
  e.preventDefault();
  this.classList.add("hover");
}

function droppingItem(e) {
  this.append(fill);
}
