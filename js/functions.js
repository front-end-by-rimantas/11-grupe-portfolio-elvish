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
function renderSkills1( list ) {
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
        
        HTML = HTML + `<div class="progress-bar">
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
function renderServices( list ) {
    let HTML = '';
    let good = 0;

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.icon ||
             !item.title ||
             !item.about ) {
            continue;
        }
        
            HTML = HTML + `<div class="cards">
            <img src="./img/services/${item.icon}" alt="service1">
            <h3>${item.title}</h3>
            <p>${item.about}</p>
        </div>`;

            good++;
        
        
    }

    if ( good === 0 ) {
        return console.error('ERROR: duotas sarasas, bet arba tuscias, arba nei vieno gero duomens');
    }
    
    return document.querySelector('#services-list').innerHTML = HTML;
}
// statistika
function renderStatistics( list ) {
    let HTML = '';
    let good = 0;



    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.icon ||
             !item.value_start ||
             !item.value_end ||
             !item.title) {
            continue;
        }

        
            HTML = HTML + `<div class="cards">
            <img src="./img/statistics/${item.icon}">
            <h1 id="statistics-numbers">${item.value_start}</h1>
            <p>${item.title}</p>
        </div>`;

            good++;
            
            
                 
        
    }
    if ( good === 0 ) {
        return console.error('ERROR: duotas sarasas, bet arba tuscias, arba nei vieno gero duomens');
    }
    return document.querySelector('#statistics-list').innerHTML = HTML;
}
function counterUp(list) {
    let elements = document.querySelectorAll('#statistics-numbers'),
        duration = 2000,
        step = 100;
        
    let count = function () {
    if (true) {
            for (let i = 0; i < elements.length; i++) {
                let grow = list[i].value_end > step ? Math.floor(list[i].value_end / step) : Math.floor(-data[i].number / step);
                elements[i].textContent = `${list[i].value_start}`;
                list[i].value_start += grow;
  
                if (list[i].value_start > list[i].value_end) {
                    list[i].value_start = list[i].value_end;
                    clearInterval(this);
                }
            }
        }
    };
  
    setInterval(count, duration / step);
  }
// education
function renderEducation( list ) {
    let HTML = '';
    let good = 0;

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.date ||
             !item.title ||
             !item.about ) {
            continue;
        }
        
            HTML = HTML + `<div class="cards">
            <p>${item.date}</p>
            <h3>${item.title}</h3>
            <p>${item.about}</p>
        </div>`;

            good++;
        
        
    }

    if ( good === 0 ) {
        return console.error('ERROR: duotas sarasas, bet arba tuscias, arba nei vieno gero duomens');
    }
    
    return document.querySelector('#education-list').innerHTML = HTML;
}
// hire me

// our work

// our clients

// great people
function renderGrpp( list ) {
    let HTML = '';
    let good = 0;

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.icon ) {
            continue;
        }
        
            HTML = HTML + `<div id="block">
            <img src="./img/great-people/${item.icon}">
        </div>`;

            good++;   
    }

    if ( good === 0 ) {
        return console.error('ERROR: duotas sarasas, bet arba tuscias, arba nei vieno gero duomens');
    }
    return document.getElementById('great-list').innerHTML = HTML;
}



// subscribe

// our blog

// contact

// footer

