// Store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
const togbutton = document.querySelector('#tog-btn');
const body = document.body;

// Toggle the show class off and on 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const currentTheme = localStorage