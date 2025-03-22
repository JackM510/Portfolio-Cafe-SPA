// Navbar Collapse
document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('.nav-link');
    let navBtn = document.querySelector('#nav-btn');
    let navCollapse = document.getElementById('collapsible-navbar');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            let bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    navBtn.addEventListener('click', function () {
        let bsCollapse = new bootstrap.Collapse(navCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});