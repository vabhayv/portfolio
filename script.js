// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize slideshow
let slideIndex = 0;
showSlides(); // Call the showSlides function to start the slideshow

// Function to display slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("certificate-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset slide index if it exceeds the number of slides
    }
    slides[slideIndex - 1].style.display = "block"; // Display the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to change slides
function changeSlide(n) {
    slideIndex += n;
    showSlides(); // Call showSlides function to display the updated slide
}

// Toggle navigation menu for mobile devices
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('nav-active'); // Toggle 'nav-active' class
});
