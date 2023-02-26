import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounterText = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toISOString().slice(0, 10);

let glassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if(localStorageValue) {
    glassCounter = localStorageValue;
    glassCounterText.innerHTML = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

buttonAdd.addEventListener('click', () => {
    glassCounter++;
    glassCounterText.innerHTML = glassCounter;
    localStorage.setItem(key, glassCounter);
});

buttonRemove.addEventListener('click', () => {
    if(glassCounter){
        glassCounter--;
        glassCounterText.innerHTML = glassCounter;
        localStorage.setItem(key, glassCounter);
    }
});