document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sideMenu = document.getElementById('side-menu');

    menuBtn.addEventListener('click', function() {
        sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });
});