import dropdown from "../packages/dropdown/lib/dropdown.js";

// Get all dropdown buttons and menus
const dropdownButtons = document.querySelectorAll(".dropdown-button");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
// Set up each dropdown using the setupDropdown function
dropdownButtons.forEach((dropdownButton, index) => {
  dropdown(dropdownButton, dropdownMenus[index]);
});

