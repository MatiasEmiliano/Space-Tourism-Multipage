//Carga Header:
const header = document.querySelector('header')
Ajax('header.html', header, ejecutarCrew)


//Ejecuta el resto de crew.js
function ejecutarCrew() {
    const barrItems = document.querySelectorAll('.barr__circle')
    const dinamicDiv = document.querySelector('.main__dinamic-ctn')
    const imagen = document.querySelector('.main__img')
    const buttonHamb = document.querySelector('.header__hamburguer')
    const menu = document.querySelector('.nav-menu')

    buttonHamb.addEventListener('click', () => {
        menu.classList.toggle('nav-menu--display')
    })

    //Carga inicial de pagina mostarndo a la mujer
    Ajax('crew-engineer.html',dinamicDiv)

    barrItems.forEach(item => {
        item.addEventListener('click', e => {
            let i = 1
            let page = ''
            let source = ''
            switch (e.target.id) {
                case '1':
                    i = 0
                    page = 'engineer'
                    source = 'assets/crew/image-anousheh-ansari.webp'
                    break
                case '2':
                    i = 1
                    page = 'pilot'
                    source = 'assets/crew/image-douglas-hurley.webp'
                    break
                case '3':
                    i = 2
                    page = 'specialist'
                    source = 'assets/crew/image-mark-shuttleworth.webp'
                    break
                case '4':
                    i = 3
                    page = 'commander'
                    source = 'assets/crew/image-victor-glover.webp'
                    break
            }
            for (let j = 0; j < barrItems.length; j++) {
                if (j == i) {
                    barrItems[j].classList.add('barr__circle--active')
                } else {
                    barrItems[j].classList.remove('barr__circle--active')
                }
            }

            Ajax(`crew-${page}.html`,dinamicDiv)
            imagen.src = source
        })
    })
}

