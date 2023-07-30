//=================toggle icon navbar==============//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

$(document).ready(function () {
    $("#menu-icon").click(function () {
        $(".navbar").toggle()
    });
});



//================= scroll sections avtive link==============//

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // // ===============sticky navbar================//
    // let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);



};

// ===============scroll reveat================//
ScrollReveal({
    // reset: true,
    distance: '100px',
    duration: 2000,
    delay: 300
});
ScrollReveal().reveal('.home-content,about-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.Services-container,.portfolio-box,.contact fotm', { origin: 'botton' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// ===============scroll reveat================//
const typed = new typed('.multiple-text', {
    strings:['Frontend Developer','kismatpatel','ravipatel'],
    typespeed:100,
    typespeed:100,
    backDelay:1000,
    loop:true    

});

var typed2 = new Typed('multiple-text', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 100,
    backSpeed: 100,
   backDelay:1000,
    loop: true
  });
    
