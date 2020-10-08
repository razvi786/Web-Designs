const toggler = document.getElementById("navbar-toggler");
const nav = document.getElementById("nav");
const navbar = document.getElementById("navbar");

toggler.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggler.classList.toggle("active");
});
