const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener("click", () => {
    removeActive(); // remmoving 'active' class by calling removeActive function
    panel.classList.add("active"); // adding class called 'active'
  });
});

// classList.remove function
function removeActive() {
  panels.forEach((panel) => {
    // using forEach to use function for every element that has 'panel' class
    panel.classList.remove("active"); // removing 'active' class from panels
  });
}
