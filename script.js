const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Problem Solving';
let index = 1;
let speed = 300 / 5;
// speedEl.value

writeText();



function writeText() {
    textEl.innerText = text.slice(0,index);
    index = index + 1;
    if (index === text.length) {
        setTimeout(() => {
            index = 0;
        }, 1500);
    }     
    setTimeout(writeText, speed);
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);