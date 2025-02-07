//

// Getting References For The Form & Display Area

(() => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    if (form) {
        form.addEventListener('submit', (event: Event) => {
            event.preventDefault(); // Prevent page reload

            const name = (document.getElementById('name') as HTMLInputElement)?.value || "";
            const email = (document.getElementById('email') as HTMLInputElement)?.value || "";
            const phone = (document.getElementById('phone') as HTMLInputElement)?.value || "";
            const education = (document.getElementById('education') as HTMLInputElement)?.value || "";
            const skills = (document.getElementById('skills') as HTMLInputElement)?.value || "";
            const experience = (document.getElementById('experience') as HTMLInputElement)?.value || "";

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

            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error('The Resume Display Element Is Missing.');
            }
        });
    } else {
        console.error('The Form Element Is Missing.');
    }
})();
