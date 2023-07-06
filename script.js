function convertTemperature() {
    var inputTemp = document.getElementById("input").value;
    var unitSelector = document.getElementById("unitSelector");
    var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    var output = document.getElementById("output");

    if (selectedUnit === "celsius") {
      var fahrenheit = (inputTemp * 9/5) + 32;
      var kelvin = parseFloat(inputTemp) + 273.15;
      output.innerHTML = inputTemp + "°C is equivalent to " + fahrenheit.toFixed(2) + "°F and " + kelvin.toFixed(2) + "K.";
    } else if (selectedUnit === "fahrenheit") {
      var celsius = (inputTemp - 32) * 5/9;
      var kelvin = (inputTemp - 32) * 5/9 + 273.15;
      output.innerHTML = inputTemp + "°F is equivalent to " + celsius.toFixed(2) + "°C and " + kelvin.toFixed(2) + "K.";
    } else if (selectedUnit === "kelvin") {
      var celsius = parseFloat(inputTemp) - 273.15;
      var fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
      output.innerHTML = inputTemp + "K is equivalent to " + celsius.toFixed(2) + "°C and " + fahrenheit.toFixed(2) + "°F.";
    }
  }
  