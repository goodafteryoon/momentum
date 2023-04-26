const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const fullClock = {
    hour: '',
    min: '',
    sec: '',
  };

  fullClock.hour = date.getHours();

  if (date.getMinutes() < 10) {
    fullClock.min = `0${date.getMinutes()}`;
  } else {
    fullClock.min = date.getMinutes();
  }

  if (date.getSeconds() < 10) {
    fullClock.sec = `0${date.getSeconds()}`;
  } else {
    fullClock.sec = date.getSeconds();
  }

  clock.innerText = `${fullClock.hour}:${fullClock.min}:${fullClock.sec}`;
}

getClock();
setInterval(getClock, 1000);
