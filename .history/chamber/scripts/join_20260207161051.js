// Set timestamp (Criterion 12)
document.getElementById('timestamp').value = new Date().toISOString();

// Modal Logic
const modals = document.querySelectorAll('dialog');
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.target);
        target.showModal();
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastModified");

yearSpan.textContent = currentYear;
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the show class off and on 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});