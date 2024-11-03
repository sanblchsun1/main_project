console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// выключить menu если clike на элементе с class="wrapper"
document.querySelector('main').addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// выключить menu если clike на элементе с class="footer_main"
document.querySelector('footer').addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});