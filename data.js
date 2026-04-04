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

  // Smooth fade out
  hero.style.transition = "opacity 1.2s ease-in-out";
  hero.style.opacity = 0.5;

  setTimeout(() => {
    hero.style.backgroundImage = "url('" + images[current] + "')";
    
    // Fade back in
    hero.style.opacity = 1;

    // Subtle zoom effect (SAFE version)
    hero.style.backgroundSize = "108%";

    setTimeout(() => {
      hero.style.backgroundSize = "100%";
    }, 6000);

    current = (current + 1) % images.length;

  }, 600);
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.style.backgroundImage = "url('" + images[0] + "')";
  hero.style.backgroundSize = "100%";
});

// Slower timing = more cinematic
setInterval(changeBackground, 8000);
