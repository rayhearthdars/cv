// /*Images gallery */

const images = [
    //create new array with images to show in gallery
    "image/jeu_de_societe.jpg",
    "image/randonnee.jpg",
    "image/lecture.jpg",
    "image/video_game.jpg",
    "image/peinture.jpg",
];

const figcaptions = [
    //create array with captions to show in gallery
    "Jeux de société",
    "Randonnée",
    "Lecture",
    "Jeux Vidéo",
    "Peinture",
];

let num = 0;
function next() {
    const slider = document.getElementsByClassName("slider").item(0); // get first image
    const caption_slider = document.getElementsByClassName("figcaption").item(0); // get first caption
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]; // source of el slider changes according to num
    caption_slider.textContent = figcaptions[num]; // same for text content of caption
}
function previous() {
    // same in reverse
    const slider = document.getElementsByClassName("slider").item(0);
    const caption_slider = document.getElementsByClassName("figcaption").item(0);
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
    caption_slider.textContent = figcaptions[num];
}

const prevImage = document.getElementsByClassName("previous").item(0);
const nextImage = document.getElementsByClassName("next").item(0);

prevImage.addEventListener(
    "click",
    function () {
        previous();
    },
    false
); // add event on click to id = previous button
nextImage.addEventListener(
    "click",
    function () {
        next();
    },
    false
); // add event on click to id = next button
/**************************************************************** */

// Create blocktype element with text content add it as parent's child.
// If fill is true, create multiple element. If false create only one.
// If name is given, add class to element.
// Return handle to it.
const softSkillsAndLanguages = document.getElementsByClassName("container_language_soft_skills").item(0);

function addElement(text, blockType, parent, fill, numTop, name) {
    const el = document.createElement(blockType);
    const newContent = document.createTextNode(text);
    el.appendChild(newContent);
    parent.appendChild(el);

    const parentWidth = window.innerWidth;
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    const multiplier = parentWidth / width / 2; // calculates the number of element to add to html so that it covers the entire screen
    const paddingSides = (parentWidth - width * multiplier) / multiplier / 2; //calculates padding to add to each element

    if (numTop !== -1) {
        el.style.top = height * numTop + 15 + "px"; //position each el[0] from top according to their number (in order of their apparition)
    }

    if (name != undefined) {
        el.classList.add(name);
    }

    if (fill) {
        //for the first element of the elements that are repeated
        el.style.position = "absolute";
        el.style.paddingLeft = paddingSides + "px";
        el.style.paddingRight = paddingSides + "px";
    }

    if (fill) {
        //for all the elements that are repeated except the first
        for (let i = 0; i < multiplier - 2; i++) {
            let el = document.createElement(blockType);
            let newContent = document.createTextNode(text);
            el.appendChild(newContent);
            parent.appendChild(el);
            el.style.paddingLeft = paddingSides + "px";
            el.style.paddingRight = paddingSides + "px";
            el.classList.add(name);
            el.style.position = "absolute";

            if (numTop !== -1) {
                el.style.top = height * numTop + 15 + "px"; //position each el[i] from top according to their number (in order of their apparition) (except first one)
            }
        }
    }

    const heightOfsoftSkillsAndLanguages = height * 9;
    softSkillsAndLanguages.style.height = heightOfsoftSkillsAndLanguages + "px";

    return el;
}

//Create new el div for soft skills and langues and h2 then ul for each el then several li for each ul  and then multiple p for each li
let div = addElement("", "div", softSkillsAndLanguages, false, -1);
addElement("Soft skills", "h2", div, true, 0, "skill");
let ulEl = addElement("", "ul", softSkillsAndLanguages, false, -1);
// let liEl = addElement('', 'li', ulEl, false, -1)
// addElement('Apprentissage rapide', 'p', liEl, true, 1, 'app');
liEl = addElement("", "li", ulEl, false, -1);
addElement("Curiosité", "p", liEl, true, 1, "curi");
liEl = addElement("", "li", ulEl, false, -1);
addElement("Rigueur", "p", liEl, true, 2, "rig");
liEl = addElement("", "li", ulEl, false, -1);
addElement("Organisée", "p", liEl, true, 3, "org");
div = addElement("", "div", softSkillsAndLanguages, false, -1);
addElement("Langues", "h2", div, true, 4, "lang");
ulEl = addElement("", "ul", softSkillsAndLanguages, false, -1);
liEl = addElement("", "li", ulEl, false, -1);
addElement("Anglais", "p", liEl, true, 5, "ang");
liEl = addElement("", "li", ulEl, false, -1);
addElement("Allemand", "p", liEl, true, 6, "all");

/*let el go by without interruption*/

let pos2 = window.innerWidth;

function initialPositionOfElement(el) {
    for (let i = 0; i < el.length; i++) {
        let position = el[0].offsetWidth * i; //length of 1 el[0] is the same for each el[i]
        el[i].style.left = position + "px";
    }
}
// position[0] = (elWidth * i) + elWidth;
function moveElementsForwards(el) {
    const elWidth = el[0].offsetWidth;
    for (let i = 0; i < el.length; i++) {
        let position = parseFloat(el[i].style.left.slice(0, -2)) + elWidth; //slice to remove "px" from el[i].style.left and turns string to float
        //add elWidth to make elWidth the origin so as to make every new el[i] start at -elWidth and not 0 so we can have the impression of an uninterrupted line
        position = (position + 0.5) % (pos2 + elWidth); //length of pos2 if elWidth is origin
        el[i].style.left = position - elWidth + "px"; //return origin to 0
    }
}

function moveElementsBackwards(el) {
    function invertPos2AndOrigin(x) {
        let u = pos2 - x; //absolute value of pos2 becomes the origin so 0 to x becomes pos2 - x
        return u;
    }
    function returnToNormal(u) {
        let x = pos2 - u; //0 is the origin once again so x is pos2 - u
        return x;
    }
    const elWidth = el[0].offsetWidth;
    for (let i = 0; i < el.length; i++) {
        let position = parseFloat(el[i].style.left.slice(0, -2)); //.slice to remove "px" from el[i].style.left and turns string to float
        let posConverted = invertPos2AndOrigin(position);
        let PositionWithPos2AsOrigin = (posConverted + 0.5) % (pos2 + elWidth);
        el[i].style.left = returnToNormal(PositionWithPos2AsOrigin) + "px";
    }
}

const elClassSkill = document.getElementsByClassName("skill");
const elClassCuri = document.getElementsByClassName("curi");
const elClassRig = document.getElementsByClassName("rig");
const elClassOrg = document.getElementsByClassName("org");
const elClassLang = document.getElementsByClassName("lang");
const elClassAng = document.getElementsByClassName("ang");
const elClassAll = document.getElementsByClassName("all");

//call intitialPosition for every class
// call setInterval function to call moveElementsForwards or moveElementsBackwards every 50ms

let tSkilInitialPosition = initialPositionOfElement(elClassSkill);
let tSkill = setInterval(moveElementsForwards, 50, elClassSkill);

let tCuriInitialPosition = initialPositionOfElement(elClassCuri);
let tCuri = setInterval(moveElementsBackwards, 50, elClassCuri);

let tRigInitialPosition = initialPositionOfElement(elClassRig);
let tRig = setInterval(moveElementsForwards, 50, elClassRig);

let tOrgInitialPosition = initialPositionOfElement(elClassOrg);
let tOrg = setInterval(moveElementsBackwards, 50, elClassOrg);

let tLangInitialPosition = initialPositionOfElement(elClassLang);
let tLang = setInterval(moveElementsForwards, 50, elClassLang);

let tAngInitialPosition = initialPositionOfElement(elClassAng);
let tAng = setInterval(moveElementsBackwards, 50, elClassAng);

let tAllInitialPosition = initialPositionOfElement(elClassAll);
let tAll = setInterval(moveElementsForwards, 50, elClassAll);
