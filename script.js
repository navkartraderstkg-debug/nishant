// Automatically load all images in same folder
// (example: 1.png, 2.png, 3.png, etc.)

const slideContainer = document.querySelector('.slides');

// You can manually adjust the number of images or detect dynamically if needed.
const imageCount = 10; // max expected count (won’t break if fewer exist)
const slides = [];

for (let i = 1; i <= imageCount; i++) {
  const img = new Image();
  img.src = `${i}.png`;
  img.onerror = () => {}; // silently skip missing images
  img.onload = () => {
    slideContainer.appendChild(img);
    slides.push(img);
    if (slides.length === 1) img.classList.add('active');
  };
}

let current = 0;
setInterval(() => {
  if (slides.length > 1) {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }
}, 3000);
