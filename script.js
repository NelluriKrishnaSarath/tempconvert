// Function to check and switch modes based on temperature
function switchModeAndConvert() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const temperature = parseFloat(celsiusInput.value);

    if (!isNaN(temperature)) {
       

        // Convert the temperature to Fahrenheit
        const fahrenheit = (temperature * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
}

// Attach the switchModeAndConvert function to the input event for real-time updates
document.getElementById('celsius').addEventListener('input', switchModeAndConvert);
