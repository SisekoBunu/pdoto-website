const images = [
  'assets/images/fashion-keith-haring.jpg',
  'assets/images/hero-main.jpg',
  'assets/images/hero-portrait-black.jpg',
  'assets/images/hero-portrait-pink.jpg',
  'assets/images/hero-portrait-studio.png',
  'assets/images/lifestyle-bucket-yellow.jpg',
  'assets/images/lifestyle-outdoor-camo.jpg',
  'assets/images/lifestyle-smile-street.jpg',
  'assets/images/live-performance-blackwhite.jpg',
  'assets/images/live-performance-blue.jpg',
  'assets/images/live-performance-mic.jpg',
  'assets/images/live-stage-crowd.jpg',
  'assets/images/studio-setup.jpg',
  'assets/images/studio-thinking.jpg'
];

let current = 0;

function changeBackground() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.style.opacity = 0.5;

  setTimeout(() => {
    hero.style.backgroundImage = "url('" + images[current] + "')";
    hero.style.opacity = 1;
    current = (current + 1) % images.length;
  }, 500);
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.style.backgroundImage = "url('" + images[0] + "')";
});

// Clean timing (no overlap)
setInterval(changeBackground, 7000);
