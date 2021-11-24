// объявляем переменные для управления шириной экранов
const arrow = document.querySelector('.arrow')
const burger = document.querySelector('.burger')
const navIcon = document.querySelector('.navbar__head__icon')
const widthNavbar = document.querySelector('.navbar')
const contentWindow = document.querySelector('.content-window')
const listTests = document.querySelector('.list')
const navbarHead = document.querySelector('.navbar__head__headline')

// при клике на стрелку/бургер туглим классы у необходимых элементов
navIcon.addEventListener('click', () => {
    arrow.classList.toggle('hide')
    burger.classList.toggle('hide')
    widthNavbar.classList.toggle('navbar-close')
    listTests.classList.toggle('hide')
    contentWindow.classList.toggle('content-window-open')
    contentWindow.classList.toggle('content-window-close')
    navbarHead.classList.toggle('hide')

})
