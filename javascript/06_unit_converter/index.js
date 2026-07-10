const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {

    const inputValue = parseFloat(inputEl.value);

    const lengthInFeet = inputValue * 3.281;
    const feetInMeters = inputValue / 3.281;
    lengthEl.textContent = `${inputValue} meters = ${lengthInFeet.toFixed(3)} feet | ${inputValue} feet = ${feetInMeters.toFixed(3)} meters`;

    const volumeInGallons = inputValue * 0.264;
    const gallonsInLiters = inputValue / 0.264;
    volumeEl.textContent = `${inputValue} liters = ${volumeInGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsInLiters.toFixed(3)} liters`;

    const massInPounds = inputValue * 2.204;
    const kilogramsInPounds = inputValue / 2.204;
    massEl.textContent = `${inputValue} kilograms = ${massInPounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilogramsInPounds.toFixed(3)} kilograms`;
});