'use strict';
let clientIndex = 1;

slide(clientIndex);

function plusSlides(n) {
    slide(clientIndex += n);
}

setInterval(function () {
    slide(clientIndex += 1);
}, 4000)

function slide(num) {
    // 1- Select the clients element
    let slide = document.getElementsByClassName("client");
    let bullets = document.querySelectorAll('.bullets ul li');
    if (num > slide.length) {
        clientIndex = 1;
    }
    if (num < 1) {
        clientIndex = slide.length
    }
    // 3- loop throw the 
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.add('display-none')
    }
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove('active');
    }
    slide[clientIndex - 1].classList.remove('display-none');
    bullets[clientIndex - 1].classList.add('active');
}