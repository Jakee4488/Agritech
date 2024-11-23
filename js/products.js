document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.querySelector('.clear-search');
    const searchBox = document.querySelector('.search-box');

    searchInput.addEventListener('input', (e) => {
        if (e.target.value) {
            clearSearch.style.display = 'block';
        } else {
            clearSearch.style.display = 'none';
        }
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.style.display = 'none';
    });

    // Search input animations
    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('search-focused');
    });

    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('search-focused');
    });

    // Advanced Filter Sidebar
    const filterBtn = document.querySelector('.advanced-filter-btn');
    const filterSidebar = document.querySelector('.advanced-filter-sidebar');
    const closeFilterBtn = document.querySelector('.close-filter');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'filter-overlay';
    document.body.appendChild(overlay);

    // Open filter sidebar
    filterBtn.addEventListener('click', function() {
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
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFilter();
        }
    });

    // Prevent clicks inside sidebar from closing it
    filterSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Filter Tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.remove();
        });
    });

    // Price Range Slider
    const priceSlider = document.querySelector('.price-slider');
    const minPrice = document.querySelector('.min-price');
    const maxPrice = document.querySelector('.max-price');

    priceSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        maxPrice.value = value;
    });

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        console.log('Sorting by:', e.target.value);
    });

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
        });

        return tag;
    }

    // Advanced filter button animation
    const advancedFilterBtn = document.querySelector('.advanced-filter-btn');
    advancedFilterBtn.addEventListener('mouseenter', () => {
        advancedFilterBtn.style.transform = 'translateY(-2px)';
    });

    advancedFilterBtn.addEventListener('mouseleave', () => {
        advancedFilterBtn.style.transform = 'translateY(0)';
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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

    document.querySelectorAll('.presence-card, .capability-card').forEach(el => {
        observer.observe(el);
    });

    // Add dynamic region selection
    const regions = document.querySelectorAll('.presence-card');
    regions.forEach(region => {
        region.addEventListener('click', () => {
            document.querySelectorAll('.presence-card').forEach(r => r.classList.remove('active'));
            region.classList.add('active');
            // You can add functionality here to show region-specific products
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
            tooltip.style.left = `${rect.left + (rect.width/2) - (tooltip.offsetWidth/2)}px`;
        });

        cert.addEventListener('mouseleave', () => {
            document.querySelector('.cert-tooltip')?.remove();
        });
    });
}); 