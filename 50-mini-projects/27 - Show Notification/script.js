const button = document.querySelector("button");
const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");
let count = 0;
button.addEventListener("click", () => {
  count++;
  let notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = `This is message #${count}`;
  notification.style.marginBottom = `${10}px`;
  document.body.append(buttonsContainer);
  buttonsContainer.append(notification);
  setTimeout(() => notification.remove(), 3000);
});
