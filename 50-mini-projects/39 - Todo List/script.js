let inputEl = document.querySelector(".task");
let taskEl = document.querySelector(".list");

let taskItems = [];

if (localStorage.getItem("task")) {
  taskItems = JSON.parse(localStorage.getItem("task"));
  loadTasks();
}

inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    taskItems.push({
      text: e.target.value,
      completed: false,
    });
    updateLS();
    loadTasks();
    e.target.value = "";
  }
});

function loadTasks() {
  taskEl.innerHTML = "";
  let items = JSON.parse(localStorage.getItem("task"));
  items.forEach((item, index) => {
    let el = document.createElement("div");
    el.classList.add("task-item");
    el.innerHTML = `<div class="item-name completed-${item.completed}">${item.text}</div><div class="close-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div>`;
    taskEl.append(el);

    el.addEventListener("contextmenu", () => {
      console.log("Clicked");
    });

    el.querySelector(".close-btn").addEventListener("click", () => {
      console.log("Clicked");
      taskItems.splice(index, 1);
      updateLS();
      loadTasks();
    });

    el.querySelector(".item-name").addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("completed-true");
      taskItems[index].completed = !taskItems[index].completed;
      updateLS();
    });
  });
}

function updateLS() {
  localStorage.setItem("task", JSON.stringify(taskItems));
}
