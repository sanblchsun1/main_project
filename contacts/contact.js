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

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    alert('Заявка отправлена!');
    this.submit();
});
