// Store the selected elements to use 
const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastModified");

yearSpan.textContent = currentYear;
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

const displayArea = document.querySelector('#course-display');
const totalDisplay = document.querySelector('#total-credits');

// Function to render the list
function renderCourses(filteredList) {
    displayArea.innerHTML = ""; // Clear current view
    
    filteredList.forEach(course => {
        const card = document.createElement('div');
        
        // Apply different style if completed
        card.className = course-card ${course.completed ? 'completed' : 'incomplete'};
        
        card.innerHTML = <span>${course.subject} ${course.number}</span>;
        displayArea.appendChild(card);
    });

    // Calculate dynamic credits using REDUCE
    const totalCredits = filteredList.reduce((acc, course) => acc + course.credits, 0);
    totalDisplay.textContent = totalCredits;
}

// Event Listeners for Buttons
document.querySelector('#all-btn').addEventListener('click', () => {
    renderCourses(courses);
});

document.querySelector('#cse-btn').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    renderCourses(cseCourses);
});

document.querySelector('#wdd-btn').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    renderCourses(wddCourses);
});

// Initial call to display all courses on load
renderCourses(courses);