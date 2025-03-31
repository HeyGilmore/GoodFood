export default function loadContactPage() {
  // Grab the div#content
  const content = document.getElementById("content");

  let contactHTML = `
      <div class="container py-5">
          <div class="row bg-light align-items-center py-5 my-5 rounded rounded-5 shadow shadow-5" id="bg-contactForm">
  
              <!-- Contact Information Section -->
              <div class="col-lg-6 mr-auto">
                  <!-- Title Section -->
                  <div class="mb-5">
                      <h3 class="mb-4">Contact Info</h3>
                      <p class="">Fresh food is the place to be. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis, perferendis aliquam.</p>
                  </div>
                  <!--- Contact Information -->
                  <div class="row">
                      <!---- Location #1 --->
                      <div class="col-md-6">
                          <!--- State -->
                          <h3 class="mb-3">Texas</h3>
                          <!---- The list starts ---->
                          <ul class="list-unstyled mb-5">
                              <li class="d-flex mb-2">
                                  <span class="mr-3><span class="icon-map"></span></span>
                                      34 Street Name, City Name Here, United States
                              </li>
                              <li class="d-flex mb-2">
                                  <span class="mr-3"><span class="icon-phone"></span></span>
                                  +1 (222) 345 6789
                              </li>
                              <li class="d-flex ">
                                  <span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com 
                              </li>
                          </ul>
                      </div>
                      
                      <!---- Location #2 --->
                      <div class="col-md-6">
                          <h3 class="mb-3">New York</h3>
                          <ul class="list-unstyled mb-5">
                              <li class="d-flex mb-2">
                                  <span class="mr-3"><span class="icon-map"></span></span>
                                  34 Street Name, City Name Here, United States
                              </li>
                              <li class="d-flex mb-2">
                                  <span class="mr-3"><span class="icon-phone"></span></span>
                                  +1 (222) 345 6789
                              </li>
                              <li class="d-flex">
                                  <span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com 
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
  
              <!------- Contact Form --------->
              <div class="col-lg-6">
                  <div class="box">
                      <!-- Header -->
                      <h3 class="header"> Send a message</h3>
                      <!---- FORM ---->
                      <form class="mb-5" method="post" id="contactForm" name="contactForm">
                          <!--- Name Section --->
                          <div class="row">
                              <div class="col-md-12 form-group">
                                  <label for="name" class="col-form-label">Name</label>
                                  <input type="text" class="form-control" name="name" id="name">
                              </div>
                          </div>
                          <!---- Email Section --->
                          <div class="row">
                              <div class="col-md-12 form-group">
                              <label for="email" class="col-form-label">Email</label>
                              <input type="email" class="form-control" name="email" id="email">
                              </div>
                          </div>
                          <!---- Message Section ---->
                          <div class="row mb-3">
                              <div class="col-md-12 form-group">
                              <label for="message" class="col-form-label">Message</label>
                              <textarea class="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                              </div>
                          </div>
                          <!--- Submit Button ---->
                          <div class="row">
                              <div class="col-md-12">
                              <input type="submit" value="Send Message" class="btn btn-block btn-primary rounded-2 w-100 rounded py-2 px-4">
                              <span class="submitting"></span>
                              </div>
                          </div>
                      </form>
  
                       <!-- Success and Error Messages -->
                      <div id="form-message-success" class="mt-4 d-none badge bg-success fs-4">
                          Your message was sent, thank you!
                      </div>
                      <div id="form-message-warning" class="d-none badge bg-danger fs-4 p-3">
                          Something went wrong!
                      </div>
  
  
  
                  </div>
              </div>
  
  
          </div>
      </div>
  
    `;

  content.innerHTML = contactHTML;

  // Add javascript to handle form submission
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("form-message-success");
  const errorMessage = document.getElementById("form-message-warning");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Simulate form validation or submission logic
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Hide error message and show success message
      errorMessage.classList.add("d-none");
      successMessage.classList.remove("d-none");

      // Clear form fields
      form.reset();
    } else {
      // Hide success message and show error message
      successMessage.classList.add("d-none");
      errorMessage.classList.remove("d-none");
    }
  });
}
