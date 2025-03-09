document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".project-pages-header-links");

  hamburger.addEventListener("click", function () {
    // Toggle the active class on the navigation links
    navLinks.classList.toggle("active");
  });
});
