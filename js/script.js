const celcText = document.querySelector(".celcius");
const swap = document.querySelector(".switch");
const fahrText = document.querySelector(".fahrenheit");
const celc = document.querySelector(".c");
const fahr = document.querySelector(".f");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const formula = document.querySelector(".formula");

swap.onclick = toFahr;
convert.onclick = convertDegree;
reset.onclick = zeroDegree;

function toFahr() {
    console.log("to fahrenthai");
    celcText.innerText = "Fahrenheit";
    fahrText.innerText = "Celcius";
    swap.onclick = toCelc;
}

function toCelc() {
    console.log("to celcius");
    celcText.innerText = "Celcius";
    fahrText.innerText = "Fahrenheit";
    swap.onclick = toFahr;
}

function convertDegree() {
    const derajat = celc.value;
    console.log(derajat);
}

function zeroDegree(params) {
    
}