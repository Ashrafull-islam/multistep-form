// dom elements 
const circles = document.querySelectorAll('.circle');
const progress = document.querySelectorAll('.indicator');
const buttons = document.querySelectorAll('.buttons');

let currentStep = 1;
// function that updates the current step and updates the dom 
const updateSteps = (e) => {
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
    if (currentStep < 1) {
        currentStep = 1; // Prevent going below 1
    } 
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });


}
// add click event listeners to all butotns 
buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});
