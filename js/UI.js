const menu_element = document.querySelector('.menu');
const img_element = document.querySelector('.img');
const body = document.querySelector('.bg')
menu_element.style.left = '-300px'
img_element.addEventListener('click', () => {
    menu_element.style.left = '0px'
})
body.addEventListener('click', () => {
    if (screen.width >= 985) {
        
    }else{
        menu_element.style.left = '-300px'
    }
    })

window.addEventListener('DOMContentLoaded', () => {
    if (screen.width > 985) {
        menu_element.style.left = '0px'
        body.style.width = 'calc(100vw - 300px)'
        body.style.left = '300px'
    } else {
        body.style.width = '100vw'
        body.style.left = '0px'
        menu_element.style.left = '-300px'
    }
})