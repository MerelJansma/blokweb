/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// JavaScript Document

console.log('hier kun je naar kleding zoeken');


// declaratie DOM elementen
var NewInElement = document.querySelector('#kleur');


// eventHandler functie
function KlikNewInElement() {
    NewInElement.classList.toggle('new');

    
    console.log('h1 verandert van kleur');
}


//eventListener toevoegen aan DOM element
KlikNewInElement.addEventListener('mouseover', NewInElement);
