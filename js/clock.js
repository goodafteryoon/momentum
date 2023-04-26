const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const fullClock = {
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
  };

  clock.innerText = `${
    fullClock.hour < 10 ? `0${fullClock.hour}` : fullClock.hour
  }:${fullClock.min < 10 ? `0${fullClock.min}` : fullClock.min}:${
    fullClock.sec < 10 ? `0${fullClock.sec}` : fullClock.sec
  }`;
}

getClock();
setInterval(getClock, 1000);
