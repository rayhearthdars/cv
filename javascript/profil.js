// /*Galerie d'images */

var images = [
    "image/jeu_de_societe.jpg",
    "image/randonnee.jpg",
    "image/lecture.jpg",
    "image/video_game.jpg"
];

var figcaptions = [
    "Jeux de société",
    "Randonnée",
    "Lecture",
    "Jeux Vidéo"
]

var num = 0;
function next() {
    let slider = document.getElementById("slider");
    let caption_slider = document.getElementById("figcaption");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    caption_slider.textContent = figcaptions[num];
}
function previous() {
    let slider = document.getElementById("slider");
    let caption_slider = document.getElementById("figcaption");
    num--;
    if (num < 0) {
        num = images.length -1;
    }
    slider.src = images[num];
    caption_slider.textContent = figcaptions[num];
}

let prevImage = document.getElementById("previous");
let nextImage = document.getElementById("next");

prevImage.addEventListener("click", function() {previous();}, false);
nextImage.addEventListener("click", function() {next();}, false);
/**************************************************************** */

// Create blocktype element with text content add it as parent's child.
// If fill is true, create multiple element. If false create only one. 
// If name is given, add class to element.
// Return handle to it.
let soft_skills__et_langues = document.getElementsByClassName('soft_skills__et_langues')[0];


function addElement (text, blockType, parent, fill, numTop, name){
    let el= document.createElement(blockType);
    let newContent = document.createTextNode(text);
    el.appendChild(newContent);        
    parent.appendChild(el);

    let parentWidth = window.innerWidth;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    let multiplier = (parentWidth/width) / 2 ;
    let paddingSides = (((parentWidth) - (width * multiplier)) / (multiplier)/2);  

    if (numTop !== -1 ) {
        el.style.top = height*(numTop) + 15 + 'px';
   }

    if (name != undefined){
        el.classList.add(name);
    }
    
    if (fill) {
        el.style.position = 'absolute';
        el.style.paddingLeft = paddingSides + 'px';
        el.style.paddingRight = paddingSides + 'px';           
    }

    if (fill) {
        for (let i = 0; i < multiplier -1; i++) {
            let el= document.createElement(blockType);
            let newContent = document.createTextNode(text);
            el.appendChild(newContent);
            parent.appendChild(el);
            el.style.paddingLeft = paddingSides + 'px';
            el.style.paddingRight = paddingSides + 'px'; 

            if (name != undefined){
                el.classList.add(name);
                el.style.position = 'absolute'; //chg               
            }
            if (numTop !== -1 ) {
                el.style.top = height*(numTop) + 15 + 'px';
           }        
        }
    }
    
let heightOfSoft_skills__et_langues = height * 8  + 50;
soft_skills__et_langues.style.height = heightOfSoft_skills__et_langues + 'px';
       
    return el;
}



let div = addElement('', 'div', soft_skills__et_langues, false, -1);
addElement('Soft skills', 'h2', div, true, 0, 'skill');
let ulEl = addElement('', 'ul', soft_skills__et_langues, false, -1);
let liEl = addElement('', 'li', ulEl, false, -1)
addElement('Prise de recul', 'p', liEl, true, 1, 'recu');
liEl = addElement('', 'li', ulEl, false, -1);
addElement('Curiosité', 'p', liEl, true, 2, 'curi');
liEl = addElement('', 'li', ulEl, false, -1);
addElement('Rigueur', 'p', liEl, true, 3, 'rig');
liEl = addElement('', 'li', ulEl, false, -1);
addElement("Sens de l'organisation", 'p', liEl, true, 4, 'org');
div = addElement('', 'div', soft_skills__et_langues, false, -1);
addElement('Langues', 'h2', div, true, 5, 'lang');
ulEl = addElement('', 'ul', soft_skills__et_langues, false, -1);
liEl = addElement('', 'li', ulEl, false, -1);
addElement('Anglais', 'p', liEl, true, 6, 'ang');
liEl = addElement('', 'li', ulEl, false, -1);
addElement('Allemand', 'p', liEl, true, 7, 'all');




/*Permettre aux soft skills et langues de défiler sans interruption*/

let pos1 = 0;
let pos2 = window.innerWidth;
let pos = []; 

function moveElementsForwards (el) {
    let elWidth = el[0].offsetWidth;  
    for (let i = 0; i < el.length; i++) {
        pos[i] = (elWidth * i) + elWidth + pos1;
        el[i].style.left = ((pos[i] % (pos2 + elWidth)) - elWidth) + "px";      
    }
    pos1 += 0.05; 
}
function moveElementsBackwards (el) {
    let elWidth = el[0].offsetWidth;  
    for (let i = 0; i < el.length; i++) {
        pos[i] = (elWidth * i) + elWidth - pos1;
        el[i].style.left = (((pos[i] +pos2) % (pos2 + elWidth)) - elWidth) + "px";      
    }
    pos1 += 0.5; 
}

let elClassSkill = document.getElementsByClassName('skill');
let elClassRecu = document.getElementsByClassName('recu');
let elClassCuri = document.getElementsByClassName('curi');
let elClassRig = document.getElementsByClassName('rig');
let elClassOrg = document.getElementsByClassName('org');
let elClassLang = document.getElementsByClassName('lang');
let elClassAng = document.getElementsByClassName('ang');
let elClassAll = document.getElementsByClassName('all');

let tSkill = setInterval(moveElementsForwards, 50, elClassSkill);
let tRecu = setInterval(moveElementsBackwards, 50, elClassRecu);
let tCuri = setInterval(moveElementsForwards, 50, elClassCuri);
let tRig = setInterval(moveElementsBackwards, 50, elClassRig);
let tOrg = setInterval(moveElementsForwards, 50, elClassOrg);
let tLang = setInterval(moveElementsBackwards, 50, elClassLang);
let tAng = setInterval(moveElementsForwards, 50, elClassAng);
let tAll = setInterval(moveElementsBackwards, 50, elClassAll);