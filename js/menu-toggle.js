document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header__toggle');
    const navList   = document.querySelector('.nav__list');

    function toggleMenu() {
    toggleBtn.classList.toggle('is-open');
    navList.classList.toggle('is-open');
    }

    toggleBtn.addEventListener('click', toggleMenu);
});