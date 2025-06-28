// Slider
const rotateBtn = document.querySelector(".rotate-btn");
const slides = document.querySelectorAll(".bg-slide");
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener("click", () => {
  rotateBtn.classList.add("active");
  setTimeout(() => {
    rotateBtn.classList.remove("active");
  }, 2100);

  slides.forEach((slide) => {
    if (slide.classList.contains("active")) {
      slide.classList.add("after-active");
    } else {
      slide.classList.remove("after-active");
    }
  });

  slides[index].classList.remove("active");

  index++;

  if (index == totalSlides) {
    index = 0;
  }

  slides[index].classList.add("active");
});

// login form
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("activee");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("activee");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
