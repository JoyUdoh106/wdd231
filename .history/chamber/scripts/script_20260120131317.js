// Store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
const togbutton = document.querySelector('#tog-btn');

// Toggle the show class off and on 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

togbutton.addEventListener('click', () => {
    ReportBody.classList.toggle('dark-mode');

    if (ReportBody.classList,contains('darkmode')) {
        localStorage.setItem('theme', dark);
    } else {
        localStorage.setItem
    }
});