const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () => {
  // Toggle the "show" class to control visibility
  dropdownMenu.classList.toggle("show");
});

// Add a click event listener to the document
document.addEventListener("click", (event) => {
  // Check if the clicked element is not the dropdown button or menu
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    // Hide the dropdown menu
    dropdownMenu.classList.remove("show");
  }
});