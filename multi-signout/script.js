// Select the buttons and elements for steps and forms
const nextButton = document.querySelector('.btn-next');
const backButton = document.querySelector('.btn-preview');
const submitButton = document.querySelector('.btn-submit');
const steps = document.querySelectorAll('.progress-steps li'); // All step indicators
const formPages = document.querySelectorAll('.form-step'); // All form pages

let currentStep = 1; // Keep track of which step the user is on

// Function to update the UI when moving between steps
function updateUI() {
    // Loop through all steps and form pages
    steps.forEach((step, index) => {
        if (index === currentStep - 1) {
            step.classList.add('active'); // Highlight the current step
            formPages[index].classList.add('active'); // Show the current page
        }
         else {
            step.classList.remove('active'); // Remove highlight from other steps
            formPages[index].classList.remove('active'); // Hide other pages
        }
    });

    // Show or hide buttons based on the current step
    backButton.style.display = currentStep === 1 ? 'none' : 'inline-block'; // Hide "Back" button on the first step
    nextButton.style.display = currentStep === steps.length ? 'none' : 'inline-block'; // Hide "Next" button on the last step
    submitButton.style.display = currentStep === steps.length ? 'inline-block' : 'none'; // Show "Submit" button only on the last step
}

// Handle the "Next" button click
nextButton.addEventListener('click', () => {
    if (currentStep < steps.length) {
        currentStep++; // Go to the next step
        updateUI(); // Update the UI
    }
});

// Handle the "Back" button click
backButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--; // Go to the previous step
        updateUI(); // Update the UI
    }
});

// Initial UI setup when the page loads
updateUI();
