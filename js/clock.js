const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const fullClock = {
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
  };

  if (fullClock.hour < 10) {
    fullClock.hour = `0${fullClock.hour}`;
  } else {
    fullClock.hour;
  }

  if (fullClock.min < 10) {
    fullClock.min = `0${fullClock.min}`;
  } else {
    fullClock.min;
  }

  if (fullClock.sec < 10) {
    fullClock.sec = `0${fullClock.sec}`;
  } else {
    fullClock.sec;
  }

  clock.innerText = `${fullClock.hour}:${fullClock.min}:${fullClock.sec}`;
}

getClock();
setInterval(getClock, 1000);
