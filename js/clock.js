const clock = document.querySelector('h2#clock');

console.log('클락은 :', clock);

function sayHello() {
  console.log('hello');
}

setInterval(sayHello, 5000); // 1000ms = 1초
