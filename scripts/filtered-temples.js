// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  // Add 3+ More Temples
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },

  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  }

];

// Generate Temple Cards
function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // Clear previous cards

  filteredTemples.forEach(temple => {
    const templeCard = `
      <div class="temple-card">
        <div class="image-wrapper">
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <div class="temple-card-content">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += templeCard;
  });
}




// Filtering Logic
function filterTemples(criteria) {
  let filtered = temples;

  if (criteria === "Old") {
    filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  } else if (criteria === "New") {
    filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  } else if (criteria === "Large") {
    filtered = temples.filter(temple => temple.area > 90000);
  } else if (criteria === "Small") {
    filtered = temples.filter(temple => temple.area < 10000);
  }

  displayTemples(filtered);
}

// Event Listeners for Navigation
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => filterTemples("Old"));
document.getElementById("new").addEventListener("click", () => filterTemples("New"));
document.getElementById("large").addEventListener("click", () => filterTemples("Large"));
document.getElementById("small").addEventListener("click", () => filterTemples("Small"));

// Initialize Page
window.onload = () => displayTemples(temples);

document.getElementById("lastModified").textContent = document.lastModified;