const change = document.getElementById("btn")
const text = document.getElementById("colour-text")
const body = document.body;

change.addEventListener('click', changeBg)

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function changeBg() {
    const col1 = randomRGB();
    const col2 = randomRGB();
    const col3 = randomRGB();

    const colorString = `RGB(${col1},${col2},${col3})`;
    body.style.background = colorString;
    text.innerText = colorString;

}