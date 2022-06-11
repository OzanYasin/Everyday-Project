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

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
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

  const actives = document.querySelectorAll(".active");

  // console.log(actives.length, circles.length);

  progress.style.width =
    // Second and third steps presents 33% and 66%. So, it means we need to substracting one from those. Which will give us a lower percentage
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// END
