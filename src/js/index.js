import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounterText = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');

let glassCounter = 0;

buttonAdd.addEventListener('click', () => {
    glassCounter++;
    glassCounterText.innerHTML = glassCounter;
});

buttonRemove.addEventListener('click', () => {
    if(glassCounter){
        glassCounter--;
        glassCounterText.innerHTML = glassCounter;
    }
});