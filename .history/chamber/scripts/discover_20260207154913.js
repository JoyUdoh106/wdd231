import { locations } from 'data/dis';

// 1. Manage LocalStorage Visitor Message (Criterion 7)
const messageDisplay = document.querySelector("#visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = parseInt(lastVisit);
    const difference = now - lastVisitDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (difference < (1000 * 60 * 60 * 24)) {
        messageDisplay.textContent = "Back so soon! Awesome!";
    } else {
        messageDisplay.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
}
localStorage.setItem("lastVisit", now);

// 2. Build Cards from JSON (Criterion 9 & 10)
const mainGrid = document.querySelector(".discover-grid");

locations.forEach(loc => {
    const card = document.createElement("section");
    card.className = "card";
    card.innerHTML = `
        <h2>${loc.name}</h2>
        <figure>
            <img src="${loc.image}" alt="${loc.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${loc.address}</address>
        <p>${loc.description}</p>
        <button>Learn More</button>
    `;
    mainGrid.appendChild(card);
});