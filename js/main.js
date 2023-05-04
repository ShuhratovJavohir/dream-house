const $burger = document.querySelector('.burger')
const $menu = document.querySelector('.menu')

const $burger1 = document.querySelector('.burger-1')
const $burger2 = document.querySelector('.burger-2')
const $burger3 = document.querySelector('.burger-3')

$burger.addEventListener('click', function(){
    $menu.classList.toggle('menu-active')
    
    $burger1.classList.toggle('burger1-active')
    $burger2.classList.toggle('burger2-active')
    $burger3.classList.toggle('burger3-active')
    
})