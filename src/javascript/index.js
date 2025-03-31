import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS components
import "../assets/css/styles.css"; // Adjusted path to styles.css
import loadHomepage from "/src/javascript/loadHomePage.js"; // Load Home Page
import loadMenuPage from "/src/javascript/loadMenuPage.js"; //Load Menu Page

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

//-- Setting up Functionality to btns on Navigation
function setupNavigation() {
  // Grabbing the div#content
  const content = document.getElementById("content");
  // Home Button
  const homeBTN = document.querySelector(".btn-primary");
  // Menu Button
  const menuBTN = document.querySelector(".btn-success");
  // Contact Button
  const contactBTN = document.querySelector(".btn-warning");

  // Clear Existing Content
  function clearContent() {
    content.textContent = "";
  }

  //-- Listeners for navigation Buttons
  // Home Page
  homeBTN.addEventListener("click", () => {
    clearContent();
    // load the homepage content
    loadHomepage();
  });
  // Menu Page
  menuBTN.addEventListener("click", () => {
    clearContent();
    // alert("menu Button");
    loadMenuPage();
  });
  // Contact Page
  contactBTN.addEventListener("click", () => {
    clearContent();
    alert("contact Button");
  });
}
