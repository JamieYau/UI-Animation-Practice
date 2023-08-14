// Function to handle the dropdown behavior
export default function dropdown(dropdownButton, dropdownMenu) {
  dropdownButton.addEventListener("click", (event) => {
    // Toggle the "show" class to control visibility
    dropdownMenu.classList.toggle("show");

    // Prevent the click event from propagating further
    event.stopPropagation();
  });

  // Add a click event listener to the document
  document.addEventListener("click", (event) => {
    // Check if the clicked element is not the dropdown button or menu
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      // Hide the dropdown menu
      dropdownMenu.classList.remove("show");
    }
  });
}
