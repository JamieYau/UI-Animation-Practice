const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () => {
  // Toggle the "show" class to control visibility
  dropdownMenu.classList.toggle("show");
});
