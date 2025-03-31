import { menuItems } from "./menuData.js";

export default function loadMenuPage() {
  // Grab the div#content
  const content = document.getElementById("content");

  // Menu Containers
  let menuHTML = `
          <section id="menu" class="menu section">
              <div class="container section-title mt-5 text-center">
                  <h1>Our Menu</h1>
                  <p><span>Check Our</span> <span class="description-title">Yummy Menu</span></p>
              </div>
              
              <div class="container py-5">
                  <div class="tab-content">
      `;

  // Calling Menu Object for each menu item
  menuItems.forEach((baseItem) => {
    menuHTML += `
              <div class="tab-pane fade show active">
                  <div class="tab-header text-center">
                      <h2 class="pt-5 fw-1">${baseItem.category}</h2>
                      <hr class="border border-danger border-2 opacity-50">
                  </div>
                  <div class="row gy-5">
          `;
    baseItem.items.forEach((item, index) => {
      // Use the category name and index to create a unique modal ID
      const modalId = `imageModal-${baseItem.category}-${index}`;

      menuHTML += `
        <div class="col-lg-4 menu-item py-5">
        <!-- id attribute uniquely identifies this modal -->
          <a href="#" data-bs-toggle="modal" data-bs-target="#${modalId}"> 
            <img
              src="${item.image}"
              class="menu-img img-fluid"
              alt="${item.name}"
            />
          </a>
          <h3>${item.name}</h3>
          <p class="ingredients">${item.description}</p>
          <p class="price">${item.price}</p>
        </div>
  
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="imageModalLabel${index}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="imageModalLabel${index}">${item.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${item.image}" class="img-fluid" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p class="pt-3">${item.description}</p>
                <p class="fw-bold">Price: ${item.price}</p>
              </div>
            </div>
          </div>
        </div>
        `;
    });
    menuHTML += `</div></div>`;
  });
  menuHTML += `</div></div></section>`;
  content.innerHTML = menuHTML;
}
