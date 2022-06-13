const overlay = document.querySelector(".overlay");

window.addEventListener("load", (e) => {
  console.log(e);
  let i = 50;

  let blurInterval = setInterval(() => {
    i--;

    document.body.style.backdropFilter = `blur(${i}px)`;
    overlay.innerHTML = `<div class="loading">${i * 2}</div>`;

    if (i <= 0) {
      clearInterval(blurInterval);
      overlay.querySelector(".loading").remove();
    }
  }, 100);
});
