/* =================================
   Mobile Menu Toggle
==================================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the mobile menu when any navigation link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/* =================================
   Contact Form Submission Handling
==================================== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default page refresh

        // Grab input values
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        // Basic verification
        if (nameInput && emailInput && messageInput) {
            // Simulated success response (you can later connect this to EmailJS or a backend API)
            alert(`Thank you, ${nameInput}! Your message has been sent successfully.`);
            contactForm.reset();
        } else {
            alert('Please fill out all required fields before submitting.');
        }
    });
}