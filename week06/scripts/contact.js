document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("contactFormData", JSON.stringify({ name, email, message }));

    document.getElementById("successMessage").classList.remove("hidden");
    document.getElementById("contactForm").reset();
});

 // Dynamically get the last modified date of the page
 const lastModified = document.lastModified;
 document.getElementById("lastModified").textContent = lastModified;