//FUNCTION TOGGLE LOGO

function scrollLogo(){

    const logo = document.getElementById('logo');
    const header = document.getElementById('header');
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    if(this.scrollY >= 70){
        logo.classList.add('scroll-logo');
        header.classList.add('scroll-header');
        btn.classList.add('scroll-btn');
        nav.classList.add('scroll-padding-bottom');
    }
    else{
        logo.classList.remove('scroll-logo');
        header.classList.remove('scroll-header');
        btn.classList.remove('scroll-btn');
        nav.classList.remove('scroll-padding-bottom');

    }
}


window.addEventListener('scroll', scrollLogo)


//FUNCTION CAROUSEL

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carousel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carousel, 2000);


//FUNCTION MENU MOBILE

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}