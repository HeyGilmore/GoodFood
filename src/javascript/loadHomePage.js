import foodLogo from "../assets/img/foodLogo.png"; // Correct relative path
export default function loadHomepage() {
  const content = document.getElementById("content");

  // Create and append the image
  const image = document.createElement("img");
  image.src = foodLogo; // Use the imported image URL
  image.alt = "Delicious food served at our restaurant";
  image.style = "width:100%;max-width:500px;display:block;margin:0 auto";
  content.appendChild(image);

  // Create and append the headline
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Food Place";
  headline.style = "text-align: center; font-size: 2rem; color: #333;";
  content.appendChild(headline);

  // Create and append the description
  const description = document.createElement("p");
  description.textContent =
    "Indulge in the finest recipe ipsum dolor sit amen. Put the olives, mushrooms and potatoes into a cauldron. Once golden, add more avocado and tofu then simmer for another 30 minutes. Grill until the fish start to bubble. Add the remaining bacon, whisk for 20 seconds and sift into the oven. Boil the potatoes for 40 minutes or until flaky.";
  description.style =
    "text-align: center; font-size: 1rem; color: #555; margin: 20px;";
  description.classList = "container mx-auto";
  content.appendChild(description);
}
