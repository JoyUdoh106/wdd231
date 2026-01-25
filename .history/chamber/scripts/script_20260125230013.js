// Store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
// const togbutton = document.querySelector('#tog-btn');
// const body = document.body;

// Toggle the show class off and on 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

const url = 'data/members.json';
const display = document.querySelector('#member-container');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let imagePath
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a style="text-decoration: none; color: blue; href="${member.website}">Visit Site</a>
            <p>Membership: ${member.level === 3 ? 'Gold' : 'Silver'}</p>
        `;
        display.appendChild(card);
    });
}

// Toggle logic
document.querySelector('#grid-view').addEventListener('click', () => {
    display.computedStyleMap.overflowX = "auto";
    display.classList.add('grid');
    display.classList.remove('list');
});

document.querySelector('#list-view').addEventListener('click', () => {
    display.computedStyleMap.overflowX = "hidden";
    display.classList.add('list');
    display.classList.remove('grid');
});

getMembers();

yearSpan.textContent = currentYear;
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
