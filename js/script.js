// ../js/script.js
    // ===============================
    // 3. Scroll Animations using Intersection Observer
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
    // 4. Parallax Effect for Hero Section
    // ===============================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // ===============================
    // 5. Button Hover Animations (if not covered by CSS)
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
