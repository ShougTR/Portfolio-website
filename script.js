const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle active class on hamburger icon click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
navLinks.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
});

// Filter projects based on category
function filterProjects(category) {
    // Get all the projects
    const projects = document.querySelectorAll('.project');

    // If 'all' category is selected, show all projects
    if (category === 'all') {
        projects.forEach(project => {
            project.style.display = 'grid'; // Show all projects
        });
    } else {
        // Hide projects that do not match the selected category
        projects.forEach(project => {
            if (project.classList.contains(category)) {
                project.style.display = 'grid'; // Show project if it matches category
            } else {
                project.style.display = 'none'; // Hide project if it does not match category
            }
        });
    }
}
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".projectImg");

// Loop through all the images and add click event listeners
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block"; // Show the modal
    modalImg.src = this.src; // Set the modal image source to the clicked image
    captionText.innerHTML = this.alt; // Set the caption to the alt text of the clicked image
  };
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
function showPopup(event) {
    event.preventDefault(); // Prevent form submission so we can show the popup first

    // Show an alert box to the user
    alert("Your form has been submitted successfully!");

    // After showing the alert, submit the form manually
    event.target.submit(); // Submitting the form after the alert
  }