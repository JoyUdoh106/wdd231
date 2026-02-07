const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastModified");

yearSpan.textContent = currentYear;
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
