const themeSwitcherBtn = document.querySelector(".theme-switcher button");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".calendar-date");
const clockEl = document.querySelector(".clock");
const clockTick = new Audio("sounds/clock-tick.wav");
const audioEl = document.querySelector(".audio");

let ADJUST_DEG = 90; // Since hands were mounted horizontally in CSS which can be adjusted either way in JS as well as in CSS
let HOUR_RATIO = 2.5; // Second hands take 360/60 = 6 deg every movement while hour hands in comparison are 60/24 = 2.5
let soundEnabled = true;

themeSwitcherBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let meridian;

function updateTime() {
  date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(hours);

  let secondDeg = (seconds * 6 + ADJUST_DEG) % 360;
  let minuteDeg = (minutes * 6 + ADJUST_DEG) % 360;
  let hourDeg = (hours * 12 * HOUR_RATIO + minuteDeg / 60 + ADJUST_DEG) % 360;

  if (hours > 12) {
    hours = hours % 12;
    meridian = "PM";
  } else {
    meridian = "AM";
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeEl.innerHTML = `<div class="hour">${hours}:</div>
                        <div class="minute">${minutes}:</div>
                        <div class="second">${seconds} </div>
                        <div class="meridian"> ${meridian}</div>`;

  updateDate();

  updateClock(secondDeg, minuteDeg, hourDeg);

  soundEnabled === true ? clockTick.play() : clockTick.pause();
}

setInterval(updateTime, 1000);

function updateDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = date.getMonth();
  let day = date.getDay();
  let year = date.getFullYear();
  let dateOfTheMonth = date.getDate();

  dateEl.innerHTML = `<div class="day">${daysInWeek[day]},</div>
                            <div class="month">${months[month]}</div>
                            <div class="date">${dateOfTheMonth}</div>
                            <div class="year">${year}</div>
                            `;
}

function updateClock(secondDeg, minuteDeg, hourDeg) {
  let hourHandEl = clockEl.querySelector(".hour-hand");
  let minuteHandEl = clockEl.querySelector(".minute-hand");
  let secondHandEl = clockEl.querySelector(".second-hand");

  secondHandEl.style.transform = `rotate(${secondDeg}deg)`;
  minuteHandEl.style.transform = `rotate(${minuteDeg}deg)`;
  hourHandEl.style.transform = `rotate(${hourDeg}deg)`;
}

let audioText = soundEnabled ? "On" : "Off";
audioEl.innerText = `Sound: ${audioText}`;

audioEl.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  audioText = soundEnabled ? "On" : "Off";
  audioEl.innerText = `Sound: ${audioText}`;
});
