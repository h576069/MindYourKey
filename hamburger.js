function openNav() {
    hamburger.classList.add("is-active");
    document.getElementById("res-men").style.display = "block";
  }

  function closeNav() {
    hamburger.classList.remove("is-active");
    document.getElementById("res-men").style.display = "none";
  }

var hamburger =  document.querySelector(".menu-btn");
hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());
