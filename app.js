const hero = document.getElementById('hero');

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = "url('" + images[index] + "')";
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);
