let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
  const slideTrack = document.querySelector(".slide-track");
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth;

  currentIndex++;
  if (currentIndex >= totalSlides / 3) {
    currentIndex = 0;
  }

  slideTrack.style.transform = `translateX(${
    -slideWidth * 3 * currentIndex
  }px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

dots[currentIndex].classList.add("active");

setInterval(showSlides, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlides();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const children = document.querySelectorAll(".our-pr .ct .right .child");
  const mainImage = document.getElementById("main-Image");
  let lastClickedChild = document.querySelector(
    ".our-pr .ct .right .child:nth-child(2)"
  );

  mainImage.src = lastClickedChild.getAttribute("data-image-src");

  children.forEach((child) => {
    child.addEventListener("click", function () {
      const newSrc = child.getAttribute("data-image-src");
      mainImage.src = newSrc;

      if (lastClickedChild) {
        lastClickedChild.style.backgroundColor = "#f6f6f6"; // Reset to default color
        lastClickedChild.querySelector(".inr").style.color = "#000000";
        lastClickedChild.querySelector(".bnr").style.color = "#000000";
      }

      child.style.backgroundColor = "red";
      child.querySelector(".inr").style.color = "#ffffff";
      child.querySelector(".bnr").style.color = "#ffffff";

      lastClickedChild = child;
    });
  });
});

// popup
// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("no-scroll");
};

span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
};
