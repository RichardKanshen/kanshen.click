const menuButtons = document.querySelectorAll('.side-menu-button');
const sections = document.querySelectorAll('.section');

// Set the first menu button and section to active by default
menuButtons[0].classList.add('active');
sections[0].classList.add('active');

menuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        // Remove the active class from all buttons and sections
        menuButtons.forEach((button) => button.classList.remove('active'));
        sections.forEach((section) => section.classList.remove('active'));

        // Set the clicked button and corresponding section to active
        button.classList.add('active');
        sections[index].classList.add('active');
    });
});
