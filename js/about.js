// js/about.js

document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // 1. Initialize AOS (if not already initialized)
    // ===============================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // ===============================
    // 2. Animated Stats Counters
    // ===============================
    const statsSection = document.querySelector('.hero-stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false; // Flag to prevent multiple triggers

    if (statsSection && statNumbers.length > 0) {
        // Function to animate numbers
        const animateNumbers = () => {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-count');
                const increment = target / 200; // Adjust for speed
                let count = 0;

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        stat.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target;
                    }
                };

                updateCount();
            });
        };

        // Intersection Observer to trigger animation when stats section is in view
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateNumbers();
                    statsAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        statsObserver.observe(statsSection);
    }
});
