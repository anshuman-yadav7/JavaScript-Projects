let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let countDash;

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function save() {
    countDash = `(${count}) - `;
    saveEl.textContent += countDash;
    saveEl.style.visibility = "visible"
    count = 0;
    countEl.textContent = 0;
}