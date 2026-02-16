/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unit = document.getElementById("unit")
let unitBtn = document.getElementById("unitBtn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204 

unitBtn.addEventListener("click", function(){
    length.textContent = `
    ${Number(unit.value)} meter = ${(Number(unit.value) * meterToFeet).toFixed(3)} feet
    |
    ${Number(unit.value)} feet = ${(Number(unit.value) / meterToFeet).toFixed(3)} meter
    `
    volume.textContent = `
    ${Number(unit.value)} liter = ${(Number(unit.value) * literToGallon).toFixed(3)} galon
    |
    ${Number(unit.value)} galon = ${(Number(unit.value) / literToGallon).toFixed(3)} liter
    `
    mass.textContent = `
    ${Number(unit.value)} kilogram = ${(Number(unit.value) * kilogramToPound).toFixed(3)} pound
    |
    ${Number(unit.value)} pound = ${(Number(unit.value) / kilogramToPound).toFixed(3)} kilogram
    `
})