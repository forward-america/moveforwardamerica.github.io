/**
 * MOVE FORWARD AMERICA - SHARED SCRIPTS
 * Common JavaScript functions used across all interactive pages
 */

/**
 * Show a specific section and hide others (tab navigation)
 * @param {number} index - The index of the section to show
 */
function showSection(index) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-btn');

    // Remove active class from all sections and buttons
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to selected section and button
    sections[index].classList.add('active');
    buttons[index].classList.add('active');

    // On mobile, scroll to top of content for better UX
    if (window.innerWidth <= 768) {
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Handle mobile navigation scrolling on page load
 * Ensures the active navigation button is visible on mobile
 */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');
    const activeBtn = document.querySelector('.nav-btn.active');

    // On mobile, scroll active button into view
    if (activeBtn && window.innerWidth <= 768) {
        activeBtn.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
});
