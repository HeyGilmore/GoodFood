import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS components
import "../assets/css/styles.css"; // Adjusted path to styles.css
import loadHomepage from "/src/javascript/loadHomePage.js"; // Load Home Page

//------ NAVIGATION Logo
// Importing food logo for tha navigation
import javascriptLogo from "../assets/img/foodLogo.png";
// Example of dynamically setting the image in the navbar
const imageElement = document.querySelector("#companyLogo");
imageElement.src = javascriptLogo;

// Initial Page Load
document.addEventListener("DOMContentLoaded", () => {
  loadHomepage(); // Load Home by default
  setupNavigation(); // Make Navigation Btn work.
});
