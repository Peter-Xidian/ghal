function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("toggle-menu");
}

// PROJECTS CAROUSEL
const arrows = document.querySelectorAll("[data-carousel-arrow]");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const offset = arrow.dataset.carouselArrow === "next" ? 1 : -1;
    const slides = arrow
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.lenght - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
