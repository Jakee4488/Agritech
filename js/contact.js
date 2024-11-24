// js/contact.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll) if not already initialized
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                email: document.getElementById('email').value.trim(),
                countryCode: contactForm.querySelector('.country-code').value,
                phone: document.getElementById('phone').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Basic Form Validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // TODO: Implement actual form submission logic (e.g., AJAX request to server)
            // For demonstration, we'll simulate a successful submission

            // Show thank you message
            thankYouMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Hide thank you message after 5 seconds
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Optional: Smooth Scroll to Contact Form on Page Load with Hash
    if (window.location.hash === '#contact') {
        const contactSection = document.querySelector('.contact-form-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Handle Hamburger Menu Toggle (if not already handled in header.js)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (hamburgerMenu && nav && menuOverlay) {
        hamburgerMenu.addEventListener('click', () => {
            const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
            hamburgerMenu.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        menuOverlay.addEventListener('click', () => {
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Additional Interactivity: Toggle Country Codes (Optional)
    // Implement as needed based on design requirements
});
