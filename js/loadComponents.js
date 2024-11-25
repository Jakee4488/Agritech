// js/loadComponents.js

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Function to load an external HTML file into a container element.
     * @param {string} containerId - The ID of the container element.
     * @param {string} filePath - The relative path to the HTML file.
     * @returns {Promise} - Resolves when the content is loaded.
     */
    function loadHTML(containerId, filePath) {
        return fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;

                // If the header is loaded, initialize header.js
                if (containerId === 'header') {
                    const script = document.createElement('script');
                    script.src = '../js/header.js';
                    script.defer = true;
                    script.onload = () => {
                        console.log('header.js loaded successfully.');
                    };
                    script.onerror = () => {
                        console.error('Failed to load header.js');
                    };
                    document.body.appendChild(script);
                }

                // If the footer is loaded, initialize footer.js
                if (containerId === 'footer') {
                    const script = document.createElement('script');
                    script.src = '../js/footer.js';
                    script.defer = true;
                    script.onload = () => {
                        console.log('footer.js loaded successfully.');
                    };
                    script.onerror = () => {
                        console.error('Failed to load footer.js');
                    };
                    document.body.appendChild(script);
                }
            })
            .catch(error => {
                console.error(error);
                document.getElementById(containerId).innerHTML = `<p>Error loading component.</p>`;
            });
    }

    /**
     * Function to initialize all components.
     */
    function initComponents() {
        // Load Header and Footer
        Promise.all([
            loadHTML('header', 'header.html'), // Adjust path if necessary
            loadHTML('footer', 'footer.html')  // Adjust path if necessary
        ]).then(() => {
            // Dispatch an event indicating components have been loaded
            document.dispatchEvent(new Event('componentsLoaded'));
        });
    }

    // Initialize components
    initComponents();
});
