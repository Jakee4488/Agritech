// js/sustainability.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll) if not already initialized
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Counter Animation for Impact Metrics
    const counters = document.querySelectorAll('[data-counter]');
    const speed = 200; // Counter speed in ms

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-counter');
            const count = +counter.innerText;

            // Calculate increment
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 2s ease';
            bar.style.width = width;
        }, 500);
    });

    // CTA Button Functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const reportLink = ctaButton.getAttribute('href');
            if (reportLink) {
                window.location.href = reportLink;
            }
        });
    }

    // Smooth Scroll for CTA Button (Optional)
    /*
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector('#report-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    */

    // Additional Interactivity: Certification Hover Tooltips (Optional)
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'cert-tooltip';
            tooltip.innerText = item.querySelector('h4').innerText;
            document.body.appendChild(tooltip);

            const rect = item.getBoundingClientRect();
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
        });

        item.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.cert-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Handle Advanced Filter Sidebar if Present
    const filterSidebar = document.querySelector('.advanced-filter-sidebar');
    const filterBtn = document.querySelector('.agri-advanced-filter-btn');
    const closeFilterBtn = document.querySelector('.close-filter');
    const overlay = document.querySelector('.filter-overlay');

    if (filterBtn && filterSidebar && closeFilterBtn && overlay) {
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
    }

    // Additional Functionality: Dynamic Content Loading or Animations
    // Implement as needed
});
