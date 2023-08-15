const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.remove("active"));
    menuItem.classList.add("active");
  });
});