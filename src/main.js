const addButton = document.querySelector('.add--js');
const subtractButton = document.querySelector('.subtract--js');
const counter = document.querySelector('.counter--js');

let glasses = 0;

let key = new Date().toLocaleDateString();

setInterval(() => {
    if (key !== new Date().toLocaleDateString()) {
        key = new Date().toLocaleDateString();
        glasses = 0;
        setCounterValue(glasses);
    }
}, 1000*60)

if (localStorage.getItem(key)) {
    glasses = parseInt(localStorage.getItem(key));
}

const setCounterValue = (value) => {
    counter.innerHTML = value;
    localStorage.setItem(key, value);
}

setCounterValue(glasses);

addButton.addEventListener('click', () => {
    glasses++;
    setCounterValue(glasses);
})

subtractButton.addEventListener('click', () => {
    if (glasses >= 1) {
        glasses--;
    setCounterValue(glasses);
    }
})