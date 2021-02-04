const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Problem Solving';
let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0,index);
    index = index + 1;
    if (index > text.length) {
        index = 1;
    }
    setTimeout(writeText, speed);
}