/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// JavaScript Document

console.log('hier kun je naar kleding zoeken');


// declaratie DOM elementen

var NieuwElement = document.querySelector('#kleur');
var Nieuw1Element = document.querySelector('#kleur1');
var Nieuw2Element = document.querySelector('#kleur2');
var Nieuw3Element = document.querySelector('#kleur3');


// eventHandler functie
function KlikNieuwElement() {
    NieuwElement.classList.toggle('new');

    
    console.log('Nieuw verandert van kleur');
}

function KlikNieuw1Element() {
    Nieuw1Element.classList.toggle('new1');

    
    console.log('Nieuw1 verandert van kleur');
}

function KlikNieuw2Element() {
    Nieuw2Element.classList.toggle('new2');

    
    console.log('Nieuw2 verandert van kleur');
}

function KlikNieuw3Element() {
    Nieuw3Element.classList.toggle('new3');

    
    console.log('Nieuw3 verandert van kleur');
}


//eventListener toevoegen aan DOM element
NieuwElement.addEventListener('click', KlikNieuwElement);
Nieuw1Element.addEventListener('click', KlikNieuw1Element);
Nieuw2Element.addEventListener('click', KlikNieuw2Element);
Nieuw3Element.addEventListener('click', KlikNieuw3Element);

