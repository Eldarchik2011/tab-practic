let menu = document.querySelector('.menu');
let links = document.querySelectorAll('.menu a');
let tabs = document.querySelectorAll('.tab');

menu.addEventListener('click', (event)=>{
event.preventDefault();
let tragetlink = event.target;
for(let i = 0; i<links.length; i++) {
    links[i].classList.remove('active');
    tragetlink.classList.add('active');

    tabs[i].classList.remove('active');
if(links[i].classList.contains('active')) {
    tabs[i].classList.add('active');
}
}
})