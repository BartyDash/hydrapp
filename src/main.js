const addButton = document.querySelector('.add--js');
const subtractButton = document.querySelector('.subtract--js');
const counter = document.querySelector('.counter--js');

let glasses = 0;

const setCounterValue = (value) => {
    counter.innerHTML = value;
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