function convert() {
    let inputValue = document.getElementById("inputValue").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result;
  

    if (fromUnit === "meters") {
      if (toUnit === "kilometers") {
        result = inputValue / 1000;
      } else if (toUnit === "miles") {
        result = inputValue * 0.000621371;
      } else {
        result = inputValue;
      }
    }
  
  
    if (fromUnit === "kilometers") {
      if (toUnit === "meters") {
        result = inputValue * 1000;
      } else if (toUnit === "miles") {
        result = inputValue * 0.621371;
      } else {
        result = inputValue;
      }
    }
  
  
    if (fromUnit === "miles") {
      if (toUnit === "meters") {
        result = inputValue / 0.000621371;
      } else if (toUnit === "kilometers") {
        result = inputValue / 0.621371;
      } else {
        result = inputValue;
      }
    }
  
    document.getElementById("result").innerHTML = result;
  }