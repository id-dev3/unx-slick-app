/// START 3D EFFECT ///

const card = document.querySelector(".image-container");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}

/// END 3D EFFECT ///


document.addEventListener("DOMContentLoaded", function () {
  const hamburgerCheckbox = document.querySelector(".hamburger input");
  const navLinks = document.querySelector(".nav-links");

  hamburgerCheckbox.addEventListener("change", function () {
    if (this.checked) {
      navLinks.style.display = "block";
      document.body.style.overflow = "hidden";
      navLinks.classList.add("show");
    } else {
      navLinks.style.display = "none";
      document.body.style.overflow = "auto";
      navLinks.classList.remove("show");
    }
  });
});