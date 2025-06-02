const container = document.getElementById("hearts-container");
const letterBox = document.getElementById("letter-box");

function getLetterBoxBounds() {
  return letterBox.getBoundingClientRect();
}

function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = Math.random() < 0.5 ? '❤️' : '💖';

  const letterBounds = getLetterBoxBounds();

  const leftSideWidth = letterBounds.left;
  const rightSideWidth = window.innerWidth - letterBounds.right;
  const side = Math.random() < 0.5 ? 'left' : 'right';

  let left;
  if (side === 'left' && leftSideWidth > 50) {
    left = Math.random() * leftSideWidth;
  } else if (rightSideWidth > 50) {
    left = letterBounds.right + Math.random() * rightSideWidth;
  } else {
    left = Math.random() * window.innerWidth;
  }

  let top;
  const letterTop = letterBounds.top;
  const letterBottom = letterBounds.bottom;
  do {
    top = Math.random() * window.innerHeight;
  } while (top > letterTop - 40 && top < letterBottom + 40);

  heart.style.left = `${left}px`;
  heart.style.top = `${top}px`;

  const size = 28 + Math.random() * 25;
  heart.style.fontSize = `${size}px`;

  const duration = 5000 + Math.random() * 3000;
  heart.style.animationDuration = `${duration}ms`;

  heart.style.animationDelay = `${Math.random() * 2000}ms`;

  container.appendChild(heart);

  setTimeout(() => heart.remove(), duration + 1500);
}

// Stagger heart creation every 200–400ms
setInterval(() => {
  if (Math.random() < 0.7) createHeart();
}, 250);
