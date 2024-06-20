const celcText = document.querySelector(".celcius");
const swap = document.querySelector(".switch");
const fahrText = document.querySelector(".fahrenheit");
const celc = document.querySelector(".c");
const fahr = document.querySelector(".f");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const formula = document.querySelector(".formula");

swap.onclick = toFahr;
convert.onclick = convertDegree(celcText);
reset.onclick = zeroDegree;

function toFahr() {
    // console.log("to fahrenthai");
    celcText.innerText = "Fahrenheit";
    fahrText.innerText = "Celcius";
    const celcTemp = celc.value;
    celc.value = fahr.value;
    fahr.value = celcTemp;
    swap.onclick = toCelc;
}

function toCelc() {
    // console.log("to celcius");
    celcText.innerText = "Celcius";
    fahrText.innerText = "Fahrenheit";
    const celcTemp = celc.value;
    celc.value = fahr.value;
    fahr.value = celcTemp;
    swap.onclick = toFahr;
}

function convertDegree(degree) {
    const derajat = celc.value;
    console.log(derajat);
    if (degree == "Celcius") {
        console.log("nice");
        fahr.value = (parseInt(celc.value) * (9/5)) + 32;
    } else if (degree = "Fahrenheit") {

    }
}

function zeroDegree() {
    celc.value = '';
    fahr.value = '';
}