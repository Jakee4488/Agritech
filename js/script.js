// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // 1. Carousel Functionality
    // ===============================
    let currentIndex = 0; // Tracks the current slide index
    const slides = document.querySelectorAll('.carousel-slide'); // All slides
    const totalSlides = slides.length; // Total number of slides
    const nextButton = document.getElementById('next'); // Next button
    const prevButton = document.getElementById('prev'); // Previous button
    const carouselContainer = document.querySelector('.carousel-container'); // Carousel container
    let autoPlayInterval; // Holds the auto-play interval reference

    function updateCarousel() {
        const transformValue = `translateX(-${currentIndex * 100}%)`;
        carouselContainer.style.transform = transformValue;
        console.log('Carousel updated:', transformValue); // Debugging log
        resetAutoPlay();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        console.log('Next slide:', currentIndex); // Debugging log
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        console.log('Previous slide:', currentIndex); // Debugging log
        updateCarousel();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(showNextSlide, 13000); // Auto-play every 13 seconds
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval); // Clear the existing interval
        startAutoPlay(); // Start a new interval
    }

    // Initialize Carousel if Elements Exist
    if (nextButton && prevButton && carouselContainer) {
        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        // Start auto-play
        startAutoPlay();

        // Pause auto-play on mouse enter and resume on mouse leave
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    } else {
        console.error('Carousel navigation buttons or container not found');
    }

    // Initialize carousel
    updateCarousel();

    // ===============================
    // 2. Scroll Animations using Intersection Observer
    // ===============================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // ===============================
    // 3. Parallax Effect for Hero Section
    // ===============================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // ===============================
    // 4. Button Hover Animations (if not covered by CSS)
    // ===============================
    const buttons = document.querySelectorAll('.btn, .learn-more-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
