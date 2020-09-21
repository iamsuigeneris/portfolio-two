const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const toggleId = document.querySelector('#toggle')

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})

function toggleMenu(){
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
}





