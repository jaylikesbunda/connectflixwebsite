document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Construct the mailto link
        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nVisit our site: http://fuckyoudeki.net`);
        const mailtoLink = `mailto:no-reply@fuckyoudeki.net?subject=${subject}&body=${body}`;
        
        // Open the user's email client with the pre-filled email
        window.location.href = mailtoLink;

        // Optionally, display a message or do something after submission
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle the Visit Site button click
document.getElementById('visit-site-button').addEventListener('click', function() {
    window.location.href = 'http://fuckyoudeki.net';
});
