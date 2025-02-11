const display = document.getElementsByClassName('display')[0];

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
