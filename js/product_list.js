// js/products_list.js

document.addEventListener('DOMContentLoaded', () => {
    // Ensure products data is loaded
    if (typeof window.products === 'undefined') {
        console.error('Products data not found.');
        return;
    }

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    // Get DOM elements
    const categoryProductCardsContainer = document.getElementById('category-product-cards');
    const breadcrumbCurrentCategory = document.getElementById('current-category-name');
    const heroSection = document.getElementById('hero-section'); // Changed selector to ID for specificity
    const heroTitle = document.querySelector('.agri-hero-content h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const sectionHeaderTitle = document.querySelector('.section-header h2');
    const sectionHeaderDesc = document.querySelector('.section-header p');

    // Check if container exists
    if (!categoryProductCardsContainer) {
        console.error('Category product cards container not found.');
        return;
    }

    if (!categoryParam) {
        categoryProductCardsContainer.innerHTML = `<p class="error-message">No category specified.</p>`;
        return;
    }

    // Find the category (case-insensitive)
    const category = window.products.find(cat => cat.title.toLowerCase() === categoryParam.toLowerCase());

    if (!category) {
        categoryProductCardsContainer.innerHTML = `<p class="error-message">Category "${categoryParam}" not found.</p>`;
        return;
    }

    // Update breadcrumb
    if (breadcrumbCurrentCategory) {
        breadcrumbCurrentCategory.textContent = category.title;
    }

    // Update hero section background image
    if (heroSection && category.backgroundImage) {
        heroSection.style.backgroundImage = `url('${category.backgroundImage}')`;
    } else {
        heroSection.style.backgroundImage = `url('../assets/images/categories/placeholder-category.jpg')`; // Fallback image
        console.warn('Hero section or background image path not found. Using placeholder.');
    }

    // Update hero title and subtitle
    if (heroTitle) heroTitle.textContent = category.title;
    if (heroSubtitle) heroSubtitle.textContent = category.category;

    // Update section header
    if (sectionHeaderTitle) sectionHeaderTitle.textContent = `${category.title} Collection`;
    if (sectionHeaderDesc) sectionHeaderDesc.textContent = category.features.join(', ');

    // Function to create a product card
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'agri-product-card';
        productCard.setAttribute('data-aos', 'fade-up'); // For AOS animations

        // Make the entire card clickable
        productCard.addEventListener('click', () => {
            window.location.href = `product.html?product=${encodeURIComponent(product.id)}`;
        });

        productCard.innerHTML = `
            <div class="agri-product-image">
                <img src="${product.image || '../assets/images/products/placeholder.jpg'}" alt="${product.name}">
            </div>
            <div class="agri-product-info">
                <h3>${product.name}</h3>
                <p>${product.shortDescription}</p>
                <div class="agri-buttons">
                    <a href="contact.html" class="agri-contact-btn" onclick="event.stopPropagation();">Contact Us</a>
                    <a href="product.html?product=${encodeURIComponent(product.id)}" class="agri-know-more-btn" onclick="event.stopPropagation();">Know More</a>
                </div>
            </div>
        `;

        return productCard;
    }

    // Display all products
    function displayAllProducts() {
        categoryProductCardsContainer.innerHTML = '';
        category.products.forEach(product => {
            const productCard = createProductCard(product);
            categoryProductCardsContainer.appendChild(productCard);
        });
    }

    // Display filtered products based on search
    function displayFilteredProducts(searchTerm) {
        const filteredProducts = category.products.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchTerm);
            const descMatch = product.shortDescription.toLowerCase().includes(searchTerm);
            return nameMatch || descMatch;
        });

        categoryProductCardsContainer.innerHTML = '';

        if (filteredProducts.length === 0) {
            categoryProductCardsContainer.innerHTML = `<p class="error-message">No products match your search.</p>`;
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            categoryProductCardsContainer.appendChild(productCard);
        });
    }

    // Initial display
    displayAllProducts();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const searchBox = document.querySelector('.agri-search-box');

    if (searchInput && clearSearch && searchBox) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim().toLowerCase();
            if (searchTerm !== '') {
                clearSearch.style.display = 'block';
                displayFilteredProducts(searchTerm);
            } else {
                clearSearch.style.display = 'none';
                displayAllProducts();
            }
        });

        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            clearSearch.style.display = 'none';
            searchInput.focus();
            displayAllProducts();
        });

        searchInput.addEventListener('focus', () => {
            searchBox.classList.add('search-focused');
        });

        searchInput.addEventListener('blur', () => {
            searchBox.classList.remove('search-focused');
        });
    } else {
        console.warn('Search elements not found in the DOM.');
    }

    // Smooth scrolling for anchor links
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

    // Initialize AOS (Animate On Scroll) if using AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }

    // Add intersection observer for custom animations if not using AOS
    /*
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
    */
});
