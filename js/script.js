const celcText = document.querySelector(".celcius");
const swap = document.querySelector(".switch");
const fahrText = document.querySelector(".fahrenheit");
const celc = document.querySelector(".c");
const fahr = document.querySelector(".f");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const formula = document.querySelector(".formula");

swap.onclick = toFahr;
convert.onclick = () => convertDegree(celcText.innerText); 
reset.onclick = zeroDegree;

function toFahr() {
    celcText.innerText = "Fahrenheit";
    fahrText.innerText = "Celcius";
    const celcTemp = celc.value;
    celc.value = fahr.value;
    fahr.value = celcTemp;
    swap.onclick = toCelc;
    convertDegree(celcText.innerText);
}

function toCelc() {
    celcText.innerText = "Celcius";
    fahrText.innerText = "Fahrenheit";
    const celcTemp = celc.value;
    celc.value = fahr.value;
    fahr.value = celcTemp;
    swap.onclick = toFahr;
    convertDegree(celcText.innerText);
}

function convertDegree(degree) {
    if (degree === "Celcius") {
        fahr.value = (parseFloat(celc.value) * (9/5)) + 32;
        formula.innerText = `(${celc.value}°C x 9/5) + 32 = ${fahr.value}°F`
    } else if (degree === "Fahrenheit") {
        fahr.value = (parseFloat(celc.value) - 32) * (5/9);
        formula.innerText = `(${celc.value}°F - 32) x 5/9 = ${fahr.value}°C`
    }
}

function zeroDegree() {
    celc.value = '';
    fahr.value = '';
    formula.innerText = '. . .';
}