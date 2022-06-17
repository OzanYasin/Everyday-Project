const search = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  // To not only opens search input, but it also focuses in the input to write text, we use .focus()
  input.focus();
});
