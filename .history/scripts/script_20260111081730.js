// Store the selected elements to use 
const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastModified");



yearSpan.textContent = currentYear;
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


