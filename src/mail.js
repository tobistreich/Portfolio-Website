const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('.submit-Btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Get needed data from email JS
const publicKey = 'TPw5MeiFdN6XXFbhV';
const serviceID = 'service_jv21hh5';
const templateID = 'template_y6pz7zw';

// initialize email JS with public key
emailjs.init(publicKey);
contactForm?.addEventListener('submit', (e) => {
    // Prevent form default behaviour
    e.preventDefault();
    // Change button text
    submitBtn.innerText = 'Einen Moment bitte...';
    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };
    // Send the email (with given Service, template ID and input field values)
    emailjs.send(serviceID, templateID, inputFields).then(
        () => {
            // change button text
            submitBtn.innerText = 'Nachricht wurde erfolgreich gesendet!';
            // Clear out all input fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        },
        (error) => {
            // Console log the error
            console.log(error);
            // Change button text
            submitBtn.innerText = 'Etwas ist schief gelaufen';
        },
    );
});
