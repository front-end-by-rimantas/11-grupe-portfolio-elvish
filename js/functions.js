"use strict";

// header
function renderHeader( target, list ) {
    let HTML = '';

    if ( target.length === 0 ||
        typeof(target) !== 'string' ) {
       return console.error('ERROR: reikia nurodyti vieta kur sugeneruoti HTML');
    }
    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }
    
    for ( let i=list.length-1; i>=0; i--) {
        if (!list[i].title ) {
            continue;
        }
        HTML += `<a class = "Elvish-meniu">${list[i].title}</a>`;
    }
    return document.getElementById(target).innerHTML = HTML;
}
// hero

// about me

// services

// statistika

// education

// hire me

// our work

// our clients

// great people

// subscribe

// our blog

// contact

// footer

