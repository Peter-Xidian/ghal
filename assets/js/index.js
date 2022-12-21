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

//GALLERY CAROUSEL

const tTrack = document.querySelector(".gg-carousel");
const tSlides = Array.from(tTrack.children);
const slideWidth = tSlides[0].getBoundingClientRect().width;

const nextBtn = document.querySelector(".gg-right");
const prevBtn = document.querySelector(".gg-left");

// Arrange the tSlides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
tSlides.forEach(setSlidePosition);

// FUNCTION TO MOVE tSlides
const moveToSlide = (tTrack, currentCard, targetSlide) => {
  tTrack.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentCard.classList.remove("current-card");
  targetSlide.classList.add("current-card");
};

// Hide or Display Arrows when slid to the end or the beginning
const hideShowArrows = (tSlides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-faded");
    nextBtn.classList.remove("is-faded");
  } else if (targetIndex === tSlides.length - 1) {
    prevBtn.classList.remove("is-faded");
    nextBtn.classList.add("is-faded");
  } else {
    prevBtn.classList.remove("is-faded");
    nextBtn.classList.remove("is-faded");
  }
};

// onclick of left arrow, move tSlides to the left
prevBtn.addEventListener("click", (e) => {
  const currentCard = tTrack.querySelector(".current-card");
  const prevSlide = currentCard.previousElementSibling;
  const prevIndex = tSlides.findIndex((slide) => slide === prevSlide);

  moveToSlide(tTrack, currentCard, prevSlide);
  hideShowArrows(tSlides, prevBtn, nextBtn, prevIndex);
});

// onclick of right arrow, move tSlides to the right
nextBtn.addEventListener("click", (e) => {
  const currentCard = tTrack.querySelector(".current-card");
  const nextSlide = currentCard.nextElementSibling;
  const nextIndex = tSlides.findIndex((slide) => slide === nextSlide);

  moveToSlide(tTrack, currentCard, nextSlide);
  hideShowArrows(tSlides, prevBtn, nextBtn, nextIndex);
});
