const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list ul');
const body = document.querySelector('body');

// Ensure the elements exist before adding event listeners
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
}

// Optional: Close mobile menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
