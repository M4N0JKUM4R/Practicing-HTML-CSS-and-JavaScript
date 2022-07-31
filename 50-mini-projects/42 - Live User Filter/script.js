const USER_API = "https://randomuser.me/api/?results=100";
const userListEl = document.querySelector(".user-list");
const userInputEl = document.querySelector(".user-input");

let userData = [];

function fetchUsers() {
  fetch(`${USER_API}`)
    .then((res) => res.json())
    .then((body) => {
      return body.results;
    })
    .then((results) => {
      userData = results;
      renderUsers(results);
    });
}

fetchUsers();

function renderUsers(results) {
  userListEl.innerHTML = "";
  results.forEach((result) => {
    let userEl = document.createElement("div");
    userEl.classList.add("user");
    userEl.innerHTML = `<div class="image">
            <img src="${result.picture.thumbnail}" />
        </div>
        <div class="details">
            <div class="name">${result.name.first} ${result.name.last}</div>
            <div class="location">${result.location.city}, ${result.location.country}</div>
        </div>`;
    userListEl.append(userEl);
  });
}

function handleUserInput(delay) {
  let timer;
  return (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const resultFilter = userData.filter(
        (el) =>
          el.name.first.includes(e.target.value) ||
          el.name.last.includes(e.target.value) ||
          el.location.city.includes(e.target.value) ||
          el.location.country.includes(e.target.value)
      );

      console.log(resultFilter);
      renderUsers(resultFilter);
    }, delay);
  };
}

const debouncedFn = handleUserInput(2000);
userInputEl.addEventListener("input", (e) => {
  debouncedFn(e);
});
