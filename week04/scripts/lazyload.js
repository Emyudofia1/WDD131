document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    // Check if Intersection Observer is supported
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Replace placeholder with actual image
                    img.classList.add("loaded"); // Add class for fade-in animation
                    observer.unobserve(img); // Stop observing once loaded
                }
            });
        });

        lazyImages.forEach(img => {
            observer.observe(img);
        });
    } else {
        // Fallback for browsers without Intersection Observer support
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add("loaded");
        });
    }

    // Update the last modified date in the footer
    document.getElementById("lastModified").textContent = document.lastModified;
});