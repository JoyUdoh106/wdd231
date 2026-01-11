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

ll courses on load
renderCourses(courses);