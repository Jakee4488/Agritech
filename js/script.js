/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    // Mobile Menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const body = document.body;

    if (hamburger) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        body.appendChild(overlay);

        function toggleMenu() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';

            // Toggle hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (hamburger.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
                } else {
                    span.style = '';
                }
            });
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.querySelector('.clear-search');

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

    // Advanced Filter Sidebar
    const filterBtn = document.querySelector('.advanced-filter-btn');
    const filterSidebar = document.querySelector('.advanced-filter-sidebar');
    const closeFilter = document.querySelector('.close-filter');

    filterBtn.addEventListener('click', () => {
        filterSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeFilter.addEventListener('click', () => {
        filterSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
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
        // Add your sorting logic here
        console.log('Sorting by:', e.target.value);
    });

    // Quantity Selector functionality
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const minusBtn = selector.querySelector('.minus');
        const plusBtn = selector.querySelector('.plus');
        const input = selector.querySelector('input');

        minusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            input.value = currentValue + 1;
        });
    });

    // Smooth scroll animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Search input animations
    const searchBox = document.querySelector('.search-box');

    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('search-focused');
    });

    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('search-focused');
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
        
        // Animation
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

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
