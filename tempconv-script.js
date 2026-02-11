function convertFromCelsius() {
    let tempInput = document.getElementById("temp").value;
    let result = document.getElementById("result");

    var fahrenheit = tempInput * 1.8 + 32;
    var kelvin = tempInput +  273.15;

    result.textContent = tempInput + "°C is equal to " + fahrenheit + "°F and " + kelvin + "°K."
}

function convertFromFahrenheit() {
    let tempInput = document.getElementById("temp").value;
    let result = document.getElementById("result");

    var celsius = (tempInput - 32) * (5/9);
    var kelvin = celsius +  273.15;

    result.textContent = tempInput + "°F is equal to " + celsius + "°C and " + kelvin + "°K."
}

function convertFromKelvin() {
    let tempInput = document.getElementById("temp").value;
    let result = document.getElementById("result");

    var celsius = tempInput -  273.15;
    var fahrenheit = celsius * 1.8 + 32;

    result.textContent = tempInput + "°K is equal to " + celsius + "°C and " + fahrenheit + "°F."
}