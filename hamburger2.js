function openNav() {
  hamburger.classList.add("is-active");
  hamburger.childNodes[9].style.transform = "none";
}
function closeNav() {
  hamburger.classList.remove("is-active");
  hamburger.childNodes[9].style.transform = "translate(-100%, 0)";
}
var hamburger = document.querySelector(".menu-btn");
hamburger.addEventListener('click', () => hamburger.classList.contains("is-active") ? closeNav() : openNav());
