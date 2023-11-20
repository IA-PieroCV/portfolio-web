document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger") as HTMLElement;
  const navLinks = document.querySelector(".nav-links") as HTMLElement;
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
      hamburger.classList.toggle("active");
    });
    function closeMobileMenuOnResize() {
      if (window.innerWidth >= 768) {
        navLinks.classList.remove("expanded");
        hamburger.classList.remove("active");
      }
    }
    window.addEventListener("resize", closeMobileMenuOnResize);
  }
});
