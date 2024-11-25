// js/products.js

// This script handles displaying the product categories on the products page.

// Ensure that the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Get the container element where the product cards will be added.
    const productCardsContainer = document.getElementById('product-cards');

    // Check if the container exists and if the products data is available.
    if (productCardsContainer && window.products) {
        // Loop through each product category.
        window.products.forEach(product => {
            // Create a new div element for the product card.
            const productCard = document.createElement('div');
            productCard.className = 'agri-product-card';

            // Make the entire card clickable.
            productCard.addEventListener('click', () => {
                window.location.href = `category.html?category=${encodeURIComponent(product.title.toLowerCase())}`;
            });

            // Set the inner HTML of the product card.
            productCard.innerHTML = `
                <div class="agri-product-header">
                    <div class="agri-product-icon">
                        <i class="${product.icon}"></i>
                    </div>
                    <h3>${product.title}</h3>
                    <span class="agri-category-tag">${product.category}</span>
                </div>
                <div class="agri-features-list">
                    <h4>Features:</h4>
                    <ul>
                        ${product.features ? product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('') : ''}
                    </ul>
                </div>
                <div class="agri-buttons">
                    <a href="contact.html" class="agri-contact-btn" onclick="event.stopPropagation();">Contact Us</a>
                    <a href="category.html?category=${encodeURIComponent(product.title.toLowerCase())}" class="agri-know-more-btn" onclick="event.stopPropagation();">Know More</a>
                </div>
            `;

            // Append the product card to the container.
            productCardsContainer.appendChild(productCard);
        });
    } else {
        console.warn('Product cards container not found or products data is missing.');
    }

    // Add smooth scrolling for anchor links.
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add intersection observer for animation.
    const animateElements = document.querySelectorAll('.presence-card, .capability-card, .agri-product-card');
    if (animateElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Add dynamic region selection.
    const regions = document.querySelectorAll('.presence-card');
    if (regions.length > 0) {
        regions.forEach(region => {
            region.addEventListener('click', () => {
                document.querySelectorAll('.presence-card').forEach(r => r.classList.remove('active'));
                region.classList.add('active');
            });
        });
    }

    // Add certification badge tooltips.
    const certifications = document.querySelectorAll('.certification-badges img');
    if (certifications.length > 0) {
        certifications.forEach(cert => {
            cert.addEventListener('mouseenter', (e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'cert-tooltip';
                tooltip.textContent = cert.alt;
                document.body.appendChild(tooltip);

                const rect = cert.getBoundingClientRect();
                tooltip.style.top = `${rect.top - 40}px`;
                tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            });

            cert.addEventListener('mouseleave', () => {
                document.querySelector('.cert-tooltip')?.remove();
            });
        });
    }

    // Function to display products based on search.
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const clearSearch = document.querySelector('.agri-clear-search');
        const searchBox = document.querySelector('.agri-search-box');

        searchInput.addEventListener('input', (e) => {
            if (e.target.value.trim() !== '') {
                if (clearSearch) clearSearch.style.display = 'block';
            } else {
                if (clearSearch) clearSearch.style.display = 'none';
            }
            displayProducts();
        });

        if (clearSearch) {
            clearSearch.addEventListener('click', () => {
                searchInput.value = '';
                clearSearch.style.display = 'none';
                searchInput.focus();
                displayProducts();
            });
        }

        searchInput.addEventListener('focus', () => {
            if (searchBox) searchBox.classList.add('search-focused');
        });

        searchInput.addEventListener('blur', () => {
            if (searchBox) searchBox.classList.remove('search-focused');
        });
    }

    function displayProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const productCards = productCardsContainer ? Array.from(productCardsContainer.children) : [];

        productCards.forEach(productCard => {
            const titleElement = productCard.querySelector('h3');
            const featuresElement = productCard.querySelector('.agri-features-list');

            const titleText = titleElement ? titleElement.innerText.toLowerCase() : '';
            const featuresText = featuresElement ? featuresElement.innerText.toLowerCase() : '';

            if (titleText.includes(searchTerm) || featuresText.includes(searchTerm)) {
                productCard.style.display = 'block';
            } else {
                productCard.style.display = 'none';
            }
        });
    }
});
