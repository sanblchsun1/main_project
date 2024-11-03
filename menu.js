console.log('Скрипт меню загружен');
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// выключить menu если clike на элементе с class="wrapper"
document.querySelector('.wrapper').addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// выключить menu если clike на элементе с class="footer_main"
document.querySelector('.footer_main').addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

