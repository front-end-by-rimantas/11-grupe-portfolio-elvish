"use strict";

// header
renderHeader( 'header', headerlinks );

const hamberger = document.querySelector('#main_header .fa-bars')
const header = document.querySelector('#main_header');

hamberger.addEventListener('click', () => {    
    header.classList.toggle('mobile-show');
;})

// window.addEventListener('scroll', headerScroll)
// hero

// about me
renderSkills1( skills1 );
// services
renderServices( services );
// statistika
renderStatistics( statistics );
counterUp( statistics );
// education

// hire me

// our work

// our clients

// great people

// subscribe

// our blog

// contact

// footer

