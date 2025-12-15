document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".fade");

  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.animation = fadeIn 1.8s ease ${index * 0.4}s forwards;
  });

});