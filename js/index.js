//Carga Header:
const header = document.querySelector('header')
Ajax('header.html',header,ejecutarIndex)

//Ejecuta el resto de index.js:
function ejecutarIndex() {
    const buttonHamb = document.querySelector('.header__hamburguer')
    const menu = document.querySelector('.nav-menu')
    buttonHamb.addEventListener('click', () => {
        menu.classList.toggle('nav-menu--display')
    })
}

