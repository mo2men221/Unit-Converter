/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let conversionInput = document.getElementById("conversion-input")
let lengthCalc = document.getElementById("length-calc")
let volumeCalc = document.getElementById("volume-calc")
let massCalc = document.getElementById("mass-calc")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204 

const conversionBtn = document.getElementById("conversion-btn")


conversionBtn.addEventListener("click",function(){
    lengthCalc.textContent = `${Number(conversionInput.value)} meters = ${(Number(conversionInput.value) * meterToFeet).toFixed(3)} feet | ${Number(conversionInput.value)} feet = ${(Number(conversionInput.value)/meterToFeet).toFixed(3)} meters`
    
    volumeCalc.textContent = `${Number(conversionInput.value)} liters = ${(Number(conversionInput.value) * literToGallon).toFixed(3)} gallon | ${Number(conversionInput.value)} gallons = ${(Number(conversionInput.value)/literToGallon).toFixed(3)} liters`
    
    massCalc.textContent = `${Number(conversionInput.value)} kilos = ${(Number(conversionInput.value) * kilogramToPound).toFixed(3)} pound | ${Number(conversionInput.value)} pound = ${(Number(conversionInput.value)/kilogramToPound).toFixed(3)} kilos`
})