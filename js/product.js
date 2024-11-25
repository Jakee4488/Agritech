// js/product.js

document.addEventListener('DOMContentLoaded', () => {
    // Ensure products data is loaded
    if (typeof window.products === 'undefined') {
        console.error('Products data not found.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');

    const productNameElement = document.getElementById('product-name');
    const productShortDescElement = document.getElementById('product-short-description');
    const productImageElement = document.getElementById('product-image');
    const productDetailedDescElement = document.getElementById('product-detailed-description');
    const breadcrumbCurrentProduct = document.getElementById('current-product-name');
    const breadcrumbCurrentCategory = document.getElementById('current-category-name');

    if (!productParam) {
        displayError("No product specified.");
        return;
    }

    // Find the product across all categories
    let foundProduct = null;
    let foundCategory = null;
    window.products.forEach(category => {
        const product = category.products.find(p => p.id === productParam);
        if (product) {
            foundProduct = product;
            foundCategory = category.title;
        }
    });

    if (!foundProduct) {
        displayError(`Product "${productParam}" not found.`);
        return;
    }

    // Populate product details
    if (productNameElement) productNameElement.textContent = foundProduct.name;
    if (productShortDescElement) productShortDescElement.textContent = foundProduct.shortDescription;
    if (productImageElement) {
        productImageElement.src = foundProduct.image || '../assets/images/products/placeholder.jpg';
        productImageElement.alt = foundProduct.name;
    }
    if (productDetailedDescElement) productDetailedDescElement.textContent = foundProduct.detailedDescription;
    if (breadcrumbCurrentProduct) breadcrumbCurrentProduct.textContent = foundProduct.name;
    if (breadcrumbCurrentCategory) breadcrumbCurrentCategory.textContent = foundCategory;

    function displayError(message) {
        const productDetailSection = document.querySelector('.agri-product-detail');
        if (productDetailSection) {
            productDetailSection.innerHTML = `<p class="error-message">${message}</p>`;
        } else {
            console.error('Product detail section not found.');
        }
    }
});
