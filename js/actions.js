"use strict";

// header
renderHeader( 'header', headerlinks );

const hamberger = document.querySelector('#main_header .fa-bars')
const header = document.querySelector('#main_header');

hamberger.addEventListener('click', () => {    
    header.classList.toggle('mobile-show');
;})

window.addEventListener('scroll', headerScroll);
headerScroll();

window.addEventListener('scroll', headerStyle);
headerStyle();

// hero

// about me
renderSkills( skills1 );

window.addEventListener('scroll', skillsScroll);
skillsScroll();
// services
renderServices( services );
// statistika
renderStatistics( statistics );
startCount(statistics);
window.addEventListener('scroll', statisticsScroll);
// education
renderEducationLeft( educationLeft );
renderEducationRight( educationRight );
// hire me

// our work

// our clients

// great people
renderGrpp( greatList );

// subscribe

// our blog
renderBlog( );
// contact

// footer

