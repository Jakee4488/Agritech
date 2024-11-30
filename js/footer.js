// js/footer.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.querySelector('.thank-you-message');

    // Regex patterns for validation
    const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Only letters and spaces, 2-50 characters
    const phoneRegex = /^[0-9]{6,15}$/; // 6-15 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    if (contactForm && thankYouMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate form inputs
            const firstName = contactForm.firstName.value.trim();
            const lastName = contactForm.lastName.value.trim();
            const phone = contactForm.phone.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            // Name Validation
            if (!nameRegex.test(firstName)) {
                alert('Please enter a valid first name (letters and spaces only, 2-50 characters).');
                contactForm.firstName.focus();
                return;
            }

            if (!nameRegex.test(lastName)) {
                alert('Please enter a valid last name (letters and spaces only, 2-50 characters).');
                contactForm.lastName.focus();
                return;
            }

            // Phone Validation
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number (6-15 digits).');
                contactForm.phone.focus();
                return;
            }

            // Email Validation
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                contactForm.email.focus();
                return;
            }

            // Message Validation (optional: can add more checks)
            if (message.length < 10) {
                alert('Please enter a message with at least 10 characters.');
                contactForm.message.focus();
                return;
            }

            // If all validations pass, collect form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log('Form Data Submitted:', data);

            // Simulate form submission (e.g., AJAX request)
            // Replace this with actual submission logic (e.g., fetch or XMLHttpRequest) if needed

            // Display thank you message with animation
            contactForm.style.opacity = '0';
            setTimeout(() => {
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
                thankYouMessage.classList.add('fade-in');
            }, 500); // Half-second delay for fade-out effect

            // Reset form and hide thank you message after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                contactForm.style.opacity = '1';
                thankYouMessage.style.display = 'none';
                thankYouMessage.classList.remove('fade-in');
            }, 7000); // 7 seconds delay
        });
    }
});
