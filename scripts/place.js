// Set current year and last modified date
// document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Display Wind Chill
const temp = 10; // Example static temperature
const windSpeed = 5; // Example static wind speed

if (temp <= 10 && windSpeed > 4.8) {
    document.getElementById("windChill").textContent = `${calculateWindChill(temp, windSpeed)}°C`;
} else {
    document.getElementById("windChill").textContent = "N/A";
}