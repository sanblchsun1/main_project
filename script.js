console.log('Скрипт загружен');

const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
if (!isMobile) {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 500,
        transition: true
    })
}
