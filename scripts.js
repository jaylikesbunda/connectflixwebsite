// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message!');
        // You can also add code here to send the form data to your backend or email service
    } else {
        alert('Please fill out all fields.');
    }
});
