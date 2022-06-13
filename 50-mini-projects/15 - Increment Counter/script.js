const socialCounters = document.querySelectorAll(".counter");

socialCounters.forEach((counter) => {
  let score = counter.innerText;
  let i = 0;

  const increment = () => {
    console.log(score);
    i++;
    counter.innerText = i * 100;
    if (i * 100 >= score) {
      console.log("Stop");
      clearInterval(interval);
    }
  };

  let interval = setInterval(increment, 10);
});
