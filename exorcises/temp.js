let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let bereken = document.getElementById("bereken");
let bereken2 = document.getElementById("bereken2");


bereken.addEventListener('click',berekening);

function berekening(){
  fahrenheit.innerHTML=(9*parseInt(celcius.value)/5)+32;
  kelvin.value= parseInt(celcius.value)+273;
}

bereken2.addEventListener('click',berekening2);

function berekening2(){
fahrenheit.innerHTML=(parseInt(kelvin.value)/9*5)-32;
celcius.value=parseInt(kelvin.value)-273.15;
}
