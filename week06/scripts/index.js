document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");

    const destinations = [
        { name: "Paris", image: "images/paris.jpg" },
        { name: "Tokyo", image: "images/tokyo.jpg" },
        { name: "New York", image: "images/ny.jpg" }
    ];

    destinations.forEach(dest => {
        const img = document.createElement("img");
        img.src = dest.image;
        img.alt = dest.name;
        img.loading = "lazy";
        carousel.appendChild(img);
    });
});

 
 // Display the last modified date on the page
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
