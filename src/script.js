const hamburgerBtn = document.querySelector('.nav__hamburger')

hamburgerBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    const menu = document.querySelector('.nav__menu')
    const openIcon = document.querySelector('.nav__hamburger-img-open')
    const closeIcon = document.querySelector('.nav__hamburger-img-close')

    menu.classList.toggle('nav__menu--hide')
    openIcon.classList.toggle('nav__hamburger-img-open--hide')
    closeIcon.classList.toggle('nav__hamburger-img-close--hide')
}