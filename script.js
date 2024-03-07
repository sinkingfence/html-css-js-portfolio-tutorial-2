function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
/*
  function scrollToSection(sectionId) {
    // Get the target element by its ID
    var targetElement = document.getElementById(sectionId);

    // Check if the target element exists
    if (targetElement) {
      // Use the scrollIntoView method to scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
*/