// DOM Selectors
const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; // Reperesents whichever one is active. (1 by default)

next.addEventListener("click", () => {
  currentActive++;
  // console.log(currentActive);
  // If currentActive greater than the length (length meaning amount of circle, in this case it's four.)
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
});

function update() {
  // We need to loop through circles with a forEach() method
  circles.forEach((circle, idx) => {
    // idx === index
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
