const menuButtons = document.querySelectorAll('.side-menu-button');
const sections = document.querySelectorAll('.section');
const midMenus = document.querySelectorAll('.mid-menu-container')

menuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        // Remove the active class from all buttons and sections
        menuButtons.forEach((button) => button.classList.remove('active'));
        sections.forEach((section) => section.classList.remove('active'));
        midMenus.forEach((midMenu) => midMenu.classList.remove('active'));

        // Set the clicked button and corresponding section to active
        menuButtons[index].classList.add('active');
        sections[index].classList.add('active');
        midMenus[index].classList.add('active');
    });
});
