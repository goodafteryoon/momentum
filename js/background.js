const imgs = [
  'homer1.jpg',
  'homer2.jpg',
  'homer3.jpg',
  'homer4.jpg',
  'homer5.jpg',
  'homer6.jpg',
];

const backgroundImg = document.createElement('img');

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

backgroundImg.src = `img/${randomImg}`;

document.body.appendChild(backgroundImg);
