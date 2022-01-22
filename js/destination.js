//Carga Header:
const header = document.querySelector('header')
Ajax('header.html', header, ejecutarDestination)


//Ejecuta el resto de destination.js
function ejecutarDestination() {
    const links = document.querySelectorAll('.container-right .nav-menu1__link ')
    const containerDin = document.querySelectorAll('.container-right__dinamic-cnt')
    const imagePlanet = document.querySelectorAll('.container-left__img')
    const items = document.querySelectorAll('.nav-menu1__item')
    const buttonHamb = document.querySelector('.header__hamburguer')
    const menu = document.querySelector('.nav-menu')

    buttonHamb.addEventListener('click', () => {
        menu.classList.toggle('nav-menu--display')
    })

    //Carga inicial de pagina mostarndo moon
    Ajax('moon.html',containerDin[0])
    imagePlanet[0].src = 'assets/destination/image-moon.webp'

    //Links de la Sub NavBar
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            let urlPlanet = ''
            let imgSrc = ''
            let i = 0;
            switch (e.target.id) {
                case 'moon':
                    i = 0;
                    urlPlanet = 'moon.html'
                    imagePlanet[0].src = 'assets/destination/image-moon.webp'
                    break;
                case 'europe':
                    i = 2;
                    urlPlanet = 'europe.html'
                    imagePlanet[0].src = 'assets/destination/image-europa.webp'
                    break;
                case 'titan':
                    i = 3;
                    urlPlanet = 'titan.html'
                    imagePlanet[0].src = 'assets/destination/image-titan.webp'
                    break;
                case 'mars':
                    i = 1;
                    urlPlanet = 'mars.html'
                    imagePlanet[0].src = 'assets/destination/image-mars.webp'
                    break;
            }
            for (let j = 0; j < items.length; j++) {
                if (j == i) {
                    items[j].classList.add('nav-menu1__item--active')
                } else {
                    items[j].classList.remove('nav-menu1__item--active')
                }
            }

            Ajax(urlPlanet,containerDin[0])
        })
    })
}
