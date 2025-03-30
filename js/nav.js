// Navbar Collapse
document.addEventListener('DOMContentLoaded', function () {
    let navElements = document.querySelectorAll('.nav-li, #nav-btn');
    let navCollapse = document.getElementById('collapsible-navbar');

    navElements.forEach(function (element) {
        element.addEventListener('click', function () {
            let bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});