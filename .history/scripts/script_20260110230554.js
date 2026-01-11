// Store the selected elements to use 
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `&copy; <span class="currentyear">${today.getfullyear()}</span>`;