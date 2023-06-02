
const boutonMenu = document.querySelector('.nav-barre__toggle')
const nav = document.querySelector('.nav-barre')
const liensMenu = document.querySelectorAll('.nav-barre__lien-item')


const toggleNav = () => {
    boutonMenu.classList.toggle('nav-barre__toggle--active')
    nav.classList.toggle('nav-barre--active')
}
const desactiveNav = () => {
    boutonMenu.classList.remove('nav-barre__toggle--active')
    nav.classList.remove('nav-barre--active')
}
boutonMenu.addEventListener('click', toggleNav)
liensMenu.forEach(lien => lien.addEventListener('click', desactiveNav))
