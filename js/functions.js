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
    HTML += `<a href="#${list[0].idname}" class="active">${list[0].title}</a>`;
    for ( let i=1; i<list.length; i++) {
        if (!list[i].title ||
            !list[i].idname) {
            continue;
        }      
        HTML += `<a href="#${list[i].idname}">${list[i].title}</a>`;
    }
    return document.getElementById(target).innerHTML = HTML;
}
//----------------------------------SKROLINIMAS--------------------------------
function headerScroll() {
    // on skrol
    // kokiame aukstyje esu
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    const height = window.scrollY + headerHeight;     // parodo kokiame puslapio akstyje esam
    
    // kokiuose auksciuose yra sekcijos (kurios yra paminetos header nav)
    const DOMlinks = document.querySelectorAll('#main_header nav > a');

    let links = [];
    for (let i = 0; i<DOMlinks.length; i++){
        const element = DOMlinks[i];
        const href = element.href;
        const split = href.split('#');

        if(split.length > 1){
            links.push('#'+split[1]);  // pasigaminam id pavadinima
        }
    }

    // susirandame sekciju poziciju aukscius
    let sectionHeights = [];
    for ( let i=0; i<links.length; i++ ) {
        const link = links[i];
        if ( link === '#' ) {
            sectionHeights.push(0);
            continue;
        }
        const section = document.querySelector(link);  // ieskos elemento id "section"
        sectionHeights.push(section.offsetTop);
    }

    // kuri sekcija man atrimiausia
    let currentSectionImIn = 0;
    for ( let i=0; i<sectionHeights.length; i++ ) {
        if ( sectionHeights[i] > height ) {
            break;
        }
        currentSectionImIn = i;
    }
        // jei artimiausia sekcija pamineta header nav'e 
            // atimame activ is ten kas ja dabar turi
            document.querySelector('#main_header nav > a.active').classList.remove('active');
            // jai duodame klasia activ
            document.querySelector(`#main_header nav > a[href="${links[currentSectionImIn]}"]`).classList.add('active');
}


function headerStyle() {
    const header = document.getElementById('main_header');

    if ( window.scrollY >= 80 ) {
        // pridedu klase fixed
        header.classList.add('fixed');
    } else {
        // atimu klase fixed
        header.classList.remove('fixed');
    }
    return;
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

function skillsScroll() {
    const myPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = myPosition + windowHeight;
    
    const DOMskills = document.querySelector('#skills');
    const skillsPosition = DOMskills.offsetTop;
    const skillsTopPadding = parseFloat( getComputedStyle( DOMskills ).paddingTop );
    
    const barHeight = DOMskills.querySelector('.progress-bar').offsetHeight;
    const barPosition = skillsPosition + skillsTopPadding + barHeight;
    
    if ( barPosition < scrollHeight ) {
        const progressBars = DOMskills.querySelectorAll('.progress-bar');
        
        for ( let i=0; i<progressBars.length; i++ ) {
            const bar = progressBars[i];
            if ( !bar.classList.contains('animate') ) {
                bar.classList.add('animate');
            }
        }
    }
    
    return;
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
   
    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.icon ||
             !item.value_start ||
             !item.title) {
            continue;
        }

            HTML = HTML + `<div class="cards">
            <img src="./img/statistics/${item.icon}">
            <h1 id="statistics-numbers">${item.value_start}</h1>
            <p>${item.title}</p>
        </div>`;

    }
    return document.querySelector('#statistics-list').innerHTML = HTML;
}

function startCount() {
    for ( let i=0; i < statistics.length; i++) {
        let item = statistics[i];
        
        let DOM = document.querySelectorAll("#statistics-numbers");
            let AllDOM = DOM[i];
            
            let valueStart = item.value_start;
            let valueStop = item.value_end;

            if(valueStart = parseInt(AllDOM.innerHTML)) {
            let interval = setInterval(time, 10);
            function time() {
                if (valueStart > valueStop) {
                clearInterval(interval);
                } 
                else {
                    AllDOM.innerHTML = valueStart = valueStart + 2;
                }
            }
        }
    }
}

function statisticsScroll() {
    let myPosition = window.scrollY;
    // console.log(myPosition);
    let windowHeight = window.innerHeight;
    // console.log(windowHeight);
    let scrollHeight = myPosition + windowHeight;
    // console.log(scrollHeight);
    let DOM = document.querySelector('#statistics-numbers');
    // console.log(DOM);
    let DOMPosition = DOM.offsetTop;
    // console.log(DOMPosition);
    if (DOMPosition < scrollHeight) {
        startCount();    
    }
    return;
}
// education
// LEFT
function renderEducationLeft( listLeft ) {
    let HTML = '';

    if ( !Array.isArray(listLeft) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<listLeft.length; i++) {
        const item = listLeft[i];
        if ( !item.date ||
             !item.title ||
             !item.about ) {
            continue;
        }
        
            HTML = HTML + `<div class="cards-left">
            <h4>${item.date}</h4>
            <h3>${item.title}</h3>
            <p>${item.about}</p>
        </div>`;       
    }
    return document.querySelector('#edu-list-left').innerHTML = HTML;
}
// RIGHT
function renderEducationRight( listRight ) {
    let HTML = '';

    if ( !Array.isArray(listRight) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<listRight.length; i++) {
        const item = listRight[i];
        if ( !item.date ||
             !item.title ||
             !item.about ) {
            continue;
        }
        
            HTML = HTML + `<div class="cards-right">
            <h4>${item.date}</h4>
            <h3>${item.title}</h3>
            <p>${item.about}</p>
        </div>`;       
    }
    return document.querySelector('#edu-list-right').innerHTML = HTML;
}


// hire me

// our work
function renderGallery( list ) {
    const DOM = document.querySelector('#gallery');
    let HTML = '';
    let filterHTML = '';
    let listHTML = '';

    // filtravimas
    let unikalusTagai = [];
    for(let i = 0; i<list.length; i++){
        const tags = list[i].tags;     
        for(let j=0; j<tags.length; j++){
            const tag = tags[j];
            if(unikalusTagai.indexOf(tag) === -1){
                unikalusTagai.push(tag);
            }
        }
    }
    filterHTML += `<div class="item active">all</div>`;
    for(let i=0; i<unikalusTagai.length; i++){
        filterHTML += `<div class="snaige">*</div>
                       <div class="item">${unikalusTagai[i]}</div>`;
    }

    // nuotraukos
    for(let i = 0; i<list.length; i++){
        const work = list[i];
        listHTML += `<div class="work show">
                        <img src="./img/our-work/${work.photo}">
                        <div class="hover">
                            <h5>${work.name}</h5>
                            <h6>${work.title.join(', ')}</h6>
                        </div>
                    </div> 

                    <div class="lightboxgallery">
                        <div class="background"></div>
                        <div class="content">
                            <img src="./img/our-work/${work.photo}">
                        </div>
                    </div>`;
    }
    
    HTML = `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${listHTML}
                </div>
            </div>`;
                    
    // idedam susikurta HTML i bendra faila
    DOM.innerHTML = HTML;

    // kada turi veikti
    const filterItem = DOM.querySelectorAll('.filter > .item');
    for (let i=0; i<filterItem.length; i++){
        filterItem[i].addEventListener('click', updateGallery);
    }
    return;
}

function updateGallery(event){
    const clickedElement = event.target;
    const clickedTag = event.target.textContent.trim();
    document.querySelector('.gallery > .filter > .item.active').classList.remove('active');
    clickedElement.classList.add('active');
    const DOMworks = document.querySelectorAll('.gallery > .list > .work');

    if ( clickedTag === 'all' ) {
        for ( let i=0; i<DOMworks.length; i++ ) {
            DOMworks[i].classList.add('show');
        }
        return;
    }

    for(let i=0; i<works.length; i++){
        const work = works[i];
        let show = false;

        for(let j=0; j<work.tags.length; j++){
            const tag = work.tags[j];
            if(clickedTag === tag){
                show = true;
            }
        }
        if(show){
            DOMworks[i].classList.add('show');
        } else {
            DOMworks[i].classList.remove('show');
        }
    }
    return;
}


// our clients
function renderClients( list ) {
    let HTML = '';
    let listHTML = '';

    // render Clients
    const defaultSelected = Math.floor( list.length / 2 );
    for ( let i=0; i<list.length; i++ ) {
        const cliento = list[i];
       
        listHTML += `<div class="cliento ${i === defaultSelected ? 'show' : ''}">
                    <img src="./img/statistics/${cliento.photo}">             
                    <div class="name">${cliento.name}</div>
                    <div class="link">${cliento.link}</div>
                    <div class="about">${cliento.about}</div>
                    </div>`;
                    
    }


    // random elementas

    // const randomCliento = list[ Math.floor(Math.random() * list.length) ];
    
    // listHTML += `<div class="cliento">
    //             <img src="./img/statistics/${randomCliento.photo}">             
    //             <div class="name">${randomCliento.name}</div>
    //             <div class="link">${randomCliento.link}</div>
    //             <div class="about">${randomCliento.about}</div>
    //             </div>`;

    // render Controls

    // connect
    HTML += `<div class="clients">
                <div class="list">
                    ${listHTML}
                </div>

                <div class="controls">
                    <div class="kirk"></div>
                    <div class="edward"></div>
                    <div class="antonio"></div>
                </div>
            </div>`;

    // in to DOM
    document.querySelector('#clients').innerHTML = HTML;

    return;
}

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
function renderBlog( list ) {
    let HTML = '';
    
    for ( let i=0; i<list.length; i++) {
        let item = list[i];

        if (item.icon && !item.video&& !item.slide) {
            HTML = HTML + `
            <div class="cards">
                <div class="blog-image" id="blog-ico">
                        <img src="${item.icon[0]}">
                </div>
            <div class="blog-info">
                    <h3>${item.title}</h3>
                    <a href="#">${item.tag}</a>
                    <p>${item.date}</p> <a href="#">By ${item.author}</a>
                    <p>${item.about}</p>
                    <a href="${item.readLink}">Read more</a> 
                    </div>
            </div>

            <div class="lightboxImg">
                <div class="background">
                </div>
                <div class="content">
                    <img src="${item.icon[0]}"</img>
                </div>
            </div>
            `;}

        if (item.slide) {
        HTML = HTML + `<div class="cards">
                <div class="blog-image" id="blog-slide">
                        <i class="fa fa-chevron-left"></i>
                        <div id="slide">
                        <img id="image-change" src="${item.slide[0]}">
                        </div>
                        <i class="fa fa-chevron-right"></i>

                </div>
                <div class="blog-info">
                        <h3>${item.title}</h3>
                        <a href="#">${item.tag}</a>
                        <p>${item.date}</p> <a href="#">By ${item.author}</a>
                        <p>${item.about}</p>
                        <a href="${item.readLink}">Read more</a> 
                </div>
        </div>`;
        }
        if (item.video) {
            HTML = HTML + `<div class="cards">
                    <div class="blog-image">
                    <div class="video-image">
                    <img src="${item.icon[0]}">
                    </div>
                        <div class="play-image">
                        <i class="fa fa-play"></i>
                        </div>
                    </div>
                    <div class="blog-info">
                            <h3>${item.title}</h3>
                            <a href="#">${item.tag}</a>
                            <p>${item.date}</p> <a href="#">By ${item.author}</a>
                            <p>${item.about}</p>
                            <a href="${item.readLink}">Read more</a> 
                    </div>
            </div>
            
            <div class="lightbox">
                <div class="background">
                </div>
                <div class="content">
                    <iframe src="${item.video}" 
                   
                    frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            </div>`;
            }
            document.querySelector('#blog-list').innerHTML = HTML;
    }
    return; 
}

let countSlide = 0;
function blogSlideLeft (list) {
    let HTML = '';

    // issirenkam duomenu lista is objekto
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        // console.log(item);

    // surandam is duomenu listo mums reikiama elementa (slide)
        if (item.slide) {
            // console.log(item.slide.length);
            // console.log(item.slide);
            // console.log(item.slide[countSlide]);

            
            if (countSlide == 0) {
                countSlide = item.slide.length;
            }
            countSlide = countSlide - 1;

            // console.log(countSlide);

            HTML = HTML + `
            <img id="image-change" src="${item.slide[countSlide]}">
            `;
            
           document.querySelector('#slide').innerHTML = HTML;   
        }
    }
}

function blogSlideRight (list) {
    let HTML = '';

    // issirenkam duomenu lista is objekto
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        // console.log(item);

    // surandam is duomenu listo mums reikiama elementa (slide)
        if (item.slide) {

            countSlide = countSlide + 1;
            if (countSlide == item.slide.length) {
                countSlide = 0
            }
            
            // console.log(countRight);

            HTML = HTML + `
            <img id="image-change" src="${item.slide[countSlide]}">
            `;
            
           document.querySelector('#slide').innerHTML = HTML;
        //    console.log(HTML);
            
        }
    }
}

// contact

// footer
function footerBack() {
    let myPosition = window.scrollY;
    let HTML = document.querySelector('.btn-footer');
    if (myPosition == 0) {
        // console.log("pranyk");
       HTML.classList.add('notShowBtn');
    }if (myPosition > 0) {
       HTML.classList.remove('notShowBtn');
    }
    return;
}
