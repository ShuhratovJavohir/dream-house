const $burger = document.querySelector('.burger')
const $menu = document.querySelector('.menu')
const $burger1 = document.querySelector('.burger-1')
const $burger2 = document.querySelector('.burger-2')
const $burger3 = document.querySelector('.burger-3')
const $telCall = document.querySelector('.tel-call')
const $callBlock = document.querySelector('.callBlock')
const $headerLeft = document.querySelector('.header__left')
const $closeCall = document.querySelector('.call__circle-2')
const $header = document.querySelector('.header')

$burger.addEventListener('click', function(){
    $menu.classList.toggle('menu-active')
    $callBlock.classList.remove('callBlock-active')

    $burger1.classList.toggle('burger1-active')
    $burger2.classList.toggle('burger2-active')
    $burger3.classList.toggle('burger3-active')
    
})

$telCall.addEventListener('click', function(){
    $menu.classList.remove('menu-active')
    $callBlock.classList.toggle('callBlock-active')
    $burger1.classList.remove('burger1-active')
    $burger2.classList.remove('burger2-active')
    $burger3.classList.remove('burger3-active')
    $headerLeft.classList.toggle('header__left-none')
    $closeCall.classList.toggle('.none')
    $header.classList.toggle('header-end')
})


/* section - 3 ========== 
===============>>>>>>>>*/
const $vip = document.querySelector('.vip')
const $vipSubTitle = document.querySelector('#vip')

$vip.addEventListener('mouseover', function(event){
    $vipSubTitle.classList.add('none-active')
})

$vip.addEventListener('mouseout', function(){
    $vipSubTitle.classList.remove('none-active')
})