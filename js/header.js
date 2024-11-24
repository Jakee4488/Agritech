// js/header.js

(function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.getElementById('navigation');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = nav.querySelectorAll('.nav-link');
    const header = document.querySelector('header');

    let lastScrollY = window.scrollY;
    let isScrollingDown = false;

    // Toggle Navigation Menu
    function toggleMenu() {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }

    // Event Listeners for Hamburger and Overlay
    if (hamburger && nav && menuOverlay) {
        hamburger.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);

        // Close menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close menu on window resize if above breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // Active Link Highlighting
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveLink();

    // Header Scroll Behavior
    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling Down
            if (!isScrollingDown) {
                header.style.top = '-60px'; // Hide header (matches reduced height)
                isScrollingDown = true;
            }
        } else {
            // Scrolling Up
            if (isScrollingDown) {
                header.style.top = '0'; // Show header
                isScrollingDown = false;
            }
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);
})();
