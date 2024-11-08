/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById('input');
const button = document.getElementById('button');

let lengthResult = document.getElementById('length-result');
console.log(lengthResult);
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');

button.addEventListener('click', function () {
  let output = `${input.value} meters = ${input.value * 3.281} feet`;
  lengthResult.textContent += output;
});
