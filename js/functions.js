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
function renderSkills( list ) {
    let HTML = '';

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++ ) {
        const item = list[i];

        if ( typeof(item.title) !== 'string' ||
             item.title.length === 0 ||
             item.title.length > 50 ||
             !isFinite(item.value) ||
             item.value < 0 ||
             item.value > 100 ) {
            continue;
        }

        // 2 === 4 ? true : false

        let num = item.value;
        if ( item.value % 1 !== 0 ) {
            num = item.value.toFixed(1);
        }
        
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${item.title}</div>
                        <div class="value">${num}%</div>
                    </div>
                    <div class="full">
                        <div class="bar" style="width: ${item.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }

    return document.querySelector('#skills').innerHTML = HTML;
}
// services

// statistika

// education

// hire me

// our work

// our clients

// great people
// function renderGrppimg( list ) {
//     let HTML = '';
//     for ( let i=0; i<list.length; i++) {
        
//         HTML += `<img src="./img/great-people/${list(i).grppimg}>`;
        
        
//     }

    
//     return document.getElementById('greatpeople').innerHTML = HTML;
// }



// subscribe

// our blog

// contact

// footer

