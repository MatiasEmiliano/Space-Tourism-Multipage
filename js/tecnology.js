//Carga Header:
const header = document.querySelector('header')
Ajax('header.html', header, ejecutarTecno)


//Ejecuta el resto de tecnology.js
function ejecutarTecno() {
    const barrItems = document.querySelectorAll('.barr1__circle')
    const dinamicDiv = document.querySelector('.main__ctn-card')
    const imagen = document.querySelector('.main__img')
    const imagenMobile = document.querySelector('.main__img-mobile')
    const buttonHamb = document.querySelector('.header__hamburguer')
    const menu = document.querySelector('.nav-menu')

    buttonHamb.addEventListener('click', () => {
        menu.classList.toggle('nav-menu--display')
    })

    Ajax( 'technology-capsule.html',dinamicDiv)

    barrItems.forEach(item => {
        item.addEventListener('click', e => {
            let i = 1
            let page = ''
            let source = ''
            switch (e.target.id) {
                case '1':
                    i = 0
                    page = 'capsule'
                    source = 'assets/technology/image-space-capsule-'
                    break
                case '2':
                    i = 1
                    page = 'spaceport'
                    source = 'assets/technology/image-spaceport-'
                    break
                case '3':
                    i = 2
                    page = 'vehicle'
                    source = 'assets/technology/image-launch-vehicle-'
                    break
            }
            for (let j = 0; j < barrItems.length; j++) {
                if (j == i) {
                    barrItems[j].classList.add('barr1__circle--active')
                } else {
                    barrItems[j].classList.remove('barr1__circle--active')
                }
            }

            Ajax(`technology-${page}.html`,dinamicDiv)
            imagen.src = source + 'portrait.jpg'
            imagenMobile.src = source + 'landscape.jpg'
        })
    })
}

