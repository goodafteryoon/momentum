const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const fullClock = {
    hour: String(date.getHours()).padStart(2, '0'),
    min: String(date.getMinutes()).padStart(2, '0'),
    sec: String(date.getSeconds()).padStart(2, '0'),
  };

  clock.innerText = `${fullClock.hour}:${fullClock.min}:${fullClock.sec}`;
}

getClock();
setInterval(getClock, 1000);
