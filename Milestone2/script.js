 document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('resume-form');
    const resumeDisplayElement = document.getElementById('resume-display');

    // Check if the form exists
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from reloading the page

            // Collect values from the form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const education = document.getElementById('education').value;
            const skills = document.getElementById('skills').value;
            const experience = document.getElementById('experience').value;

            // Generate the resume HTML dynamically
            const resumeHTML = `
                <h2><b>Editable Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b><strong>Name:</strong></b><span contenteditable="true">${name}</span></p>
                <p><b><strong>Email:</strong></b><span contenteditable="true">${email}</span></p>
                <p><b><strong>Phone:</strong></b><span contenteditable="true">${phone}</span></p>

                <h3>Education</h3>
                <p contenteditable="true">${education}</p>

                <h3>Skills</h3>
                <p contenteditable="true">${skills}</p>

                <h3>Experience</h3>
                <p contenteditable="true">${experience}</p>
            `;

            // Display the generated resume in the resume-display div
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error('The Resume Display Element Is Missing.');
            }
        });
    }
});





   
// Getting References For The Form & Display Area
// var form = document.getElementById('resume-form');
// var resumeDisplayElement = document.getElementById('resume-display');
// // Handle Form Submission 
// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // prevent page reload 
//     // Collecting Input Values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var education = document.getElementById('education').value;
//     var skills = document.getElementById('skills').value;
//     var experience = document.getElementById('experience').value;
//     // Generating The Resume Content Dynamically
//     var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b><strong>Name:</strong></b><span contenteditable=\"true\"> ".concat(name, " </span></p>\n        <p><b><strong>Email:</strong></b><span contenteditable=\"true\"> ").concat(email, " </span></p>\n        <p><b><strong>Phone:</strong></b><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\"> ").concat(education, " </p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\"> ").concat(skills, " </p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\"> ").concat(experience, " </p>\n        ");
//     // Display The Generated Resume
//     if (resumeDisplayElement) {
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }
//     else {
//         console.error('The Resume Display Element Is Missing.');
//     }
// });




