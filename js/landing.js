// Wait for the page to load
window.addEventListener('load', function() {
    // Add fade to landing-span
    const landingSpan = document.getElementById('landing-span');
    landingSpan.classList.add('span-fade');
    // Add fade to landing-img
    const landingImg = document.getElementById('landing-img');
    landingImg.classList.add('img-fade');
});