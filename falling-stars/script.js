const body = document.body;

function createStar() {
  const star = document.createElement("i");
  star.classList.add("star", "fas", "fa-star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = Math.random() * 5 + 5 + "s";
  star.style.color = getRandomColor();
  star.addEventListener("mouseover", () => {
    star.classList.add("fa-3x");
  });
  star.addEventListener("mouseout", () => {
    star.classList.remove("fa-3x");
  });
  star.addEventListener("click", () => {
    star.style.visibility = "hidden";
  });
  body.appendChild(star);
  setTimeout(() => {
    star.remove();
  }, 20000);
}

function createMoon() {
  const moon = document.createElement("i");
  moon.classList.add("moon", "fas", "fa-moon");
  moon.style.left = Math.random() * 100 + "vw";
  moon.style.animationDuration = Math.random() * 10 + 10 + "s";
  moon.style.color = "bisque";
  moon.addEventListener("mouseover", () => {
    moon.classList.add("fa-6x");
  });
  moon.addEventListener("mouseout", () => {
    moon.classList.remove("fa-6x");
  });
  moon.addEventListener("click", () => {
    moon.style.visibility = "hidden";
  });
  body.appendChild(moon);
  setTimeout(() => {
    moon.remove();
  }, 20000);
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, ${Math.random() * 100}%, 50%`;
}

setInterval(createStar, 1000);
setInterval(createMoon, 2000);
