/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById('input');
const button = document.getElementById('button');

let lengthResult = document.getElementById('length-result');

let volumeResult = document.getElementById('volume-result');
let massResult = document.getElementById('mass-result');

button.addEventListener('click', function () {
  let lengthOutput = `${input.value} meters = ${(input.value * 3.281).toFixed(
    3
  )} feet | ${input.value} feet = ${(input.value * 0.3048).toFixed(3)} meters`;
  lengthResult.textContent = lengthOutput;

  let volumeOutput = `${input.value} liters = ${(input.value * 0.264).toFixed(
    3
  )} gallons | ${input.value} gallons = ${(input.value * 3.7854).toFixed(
    3
  )} liters`;
  volumeResult.textContent = volumeOutput;

  let massOutput = `${input.value} kilos = ${(input.value * 2.204).toFixed(
    3
  )} pounds | ${input.value} pounds = ${(input.value * 0.453592).toFixed(
    3
  )} kilos`;
  massResult.textContent = massOutput;
});
