var eKey = document.querySelector('.card.key p:first-child')
var eLocation = document.querySelector('.card.location p:first-child')
var eWhich = document.querySelector('.card.which p:first-child')
var eCode = document.querySelector('.card.code p:first-child')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener('keydown', e=>{
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.keyCode
    eCode.innerText = e.code
    result.innerText = e.keyCode 

    alert.classList.add('hide')
    box.classList.remove('hide')
})
