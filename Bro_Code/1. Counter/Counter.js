let counter = 0;

document.getElementById('counter').innerHTML = counter;

document.querySelector('#increment').onclick = () => {
    counter++;
document.getElementById('counter').innerHTML = counter;
}

document.querySelector('#decrement').onclick = () => {
    counter--;
    document.getElementById('counter').innerHTML = counter;
}

document.querySelector('#reset').onclick = () => {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}