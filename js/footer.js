// js/footer.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.querySelector('.thank-you-message');

    if (contactForm && thankYouMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log('Form Data Submitted:', data);

            // Simulate form submission (e.g., AJAX request)
            // Replace this with actual submission logic (e.g., fetch or XMLHttpRequest) if needed

            // Display thank you message
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';

            // Reset form and hide thank you message after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                thankYouMessage.style.display = 'none';
            }, 5000); // 5 seconds delay
        });
    }
});
