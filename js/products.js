// js/products.js

document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.querySelector('.agri-clear-search'); // Corrected selector
    const searchBox = document.querySelector('.agri-search-box'); // Corrected selector

    if (searchInput && clearSearch && searchBox) {
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.trim() !== '') {
                clearSearch.style.display = 'block';
            } else {
                clearSearch.style.display = 'none';
            }
        });

        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            clearSearch.style.display = 'none';
            searchInput.focus(); // Optional: Focus back on search input
            displayProducts(); // Refresh the product display
        });

        // Search input animations
        searchInput.addEventListener('focus', () => {
            searchBox.classList.add('search-focused');
        });

        searchInput.addEventListener('blur', () => {
            searchBox.classList.remove('search-focused');
        });
    } else {
        console.warn('Search elements not found in the DOM.');
    }

    // Advanced Filter Sidebar
    const filterBtn = document.querySelector('.agri-advanced-filter-btn'); // Corrected selector
    const filterSidebar = document.querySelector('.advanced-filter-sidebar'); // Ensure this exists in HTML
    const closeFilterBtn = document.querySelector('.close-filter');

    if (filterBtn && filterSidebar && closeFilterBtn) {
        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'filter-overlay';
        document.body.appendChild(overlay);

        // Open filter sidebar
        filterBtn.addEventListener('click', function () {
            filterSidebar.classList.add('show');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close filter sidebar
        function closeFilter() {
            filterSidebar.classList.remove('show');
            overlay.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }

        closeFilterBtn.addEventListener('click', closeFilter);
        overlay.addEventListener('click', closeFilter);

        // Close on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeFilter();
            }
        });

        // Prevent clicks inside sidebar from closing it
        filterSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    } else {
        console.warn('Advanced filter elements not found in the DOM.');
    }

    // Filter Tags
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.remove();
            // Optionally, remove the filter from activeFilters array
            // activeFilters = activeFilters.filter(f => f !== tag.textContent.trim());
            displayProducts();
        });
    });

    // Price Range Slider
    const priceSlider = document.querySelector('.price-slider');
    const minPrice = document.querySelector('.min-price');
    const maxPrice = document.querySelector('.max-price');

    if (priceSlider && minPrice && maxPrice) {
        priceSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            maxPrice.value = value;
            // Optionally, update active filters or display products
            displayProducts();
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            console.log('Sorting by:', e.target.value);
            displayProducts();
        });
    }

    // Filter tags management
    function createFilterTag(filterText) {
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            ${filterText}
            <i class="fas fa-times"></i>
        `;
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';

        setTimeout(() => {
            tag.style.transition = 'all 0.3s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 10);

        tag.querySelector('i').addEventListener('click', () => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px)';
            setTimeout(() => tag.remove(), 300);
            // Remove from activeFilters array
            activeFilters = activeFilters.filter(f => f !== filterText);
            displayProducts();
        });

        return tag;
    }

    // Advanced filter button animation
    if (filterBtn) {
        filterBtn.addEventListener('mouseenter', () => {
            filterBtn.style.transform = 'translateY(-2px)';
        });

        filterBtn.addEventListener('mouseleave', () => {
            filterBtn.style.transform = 'translateY(0)';
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // Add intersection observer for animation
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

    const animateElements = document.querySelectorAll('.presence-card, .capability-card, .agri-product-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add dynamic region selection
    const regions = document.querySelectorAll('.presence-card');
    regions.forEach(region => {
        region.addEventListener('click', () => {
            document.querySelectorAll('.presence-card').forEach(r => r.classList.remove('active'));
            region.classList.add('active');
            // Implement functionality to show region-specific products
        });
    });

    // Add certification badge tooltips
    const certifications = document.querySelectorAll('.certification-badges img');
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

    // Function to display products based on filters and search
    function displayProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const sortOption = sortSelect ? sortSelect.value : 'featured';

        let products = Array.from(productsGrid.children);

        // Filter by search term
        if (searchTerm) {
            products = products.filter(product => {
                const title = product.querySelector('h3') ? product.querySelector('h3').innerText.toLowerCase() : '';
                const features = product.querySelector('.agri-features-list') ? product.querySelector('.agri-features-list').innerText.toLowerCase() : '';
                return title.includes(searchTerm) || features.includes(searchTerm);
            });
        }

        // Filter by active filters
        if (activeFilters.length > 0) {
            products = products.filter(product => {
                // Check if product has all active filters in its data attributes or classes
                return activeFilters.every(filter => {
                    // Example: Check data-category
                    return product.dataset.category && product.dataset.category.includes(filter);
                });
            });
        }

        // Sorting (Implement as needed)
        // Placeholder: Currently, no sorting logic is implemented
        // You can implement sorting based on data-price, data-date, etc.

        // Display or hide products
        products.forEach(product => {
            if (products.includes(product)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
