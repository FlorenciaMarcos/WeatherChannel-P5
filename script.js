const button = document.getElementById("obtenerData");
const containerCiudades = document.getElementById("containerCiudades");
const input = document.getElementById("ciudadSelect");
const ciudadSpam = document.getElementById("ciudad");
const temperatura = document.getElementById("temperatura");
const icon = document.getElementById("wicon");

button.addEventListener("click", (event)=> {
    cargarCiudad(input.value);
})

function cargarCiudad(ciudad){
    console.log(ciudad)
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+
"&appid=95176c8edea30e33338e0eaddd53a916&units=metric",
function(data) {
    console.log(data);
    containerCiudades.style.visibility = "visible";
    ciudadSpam.innerText = data.name;
    temperatura.innerHTML = data.main.temp;
    document.getElementById("wicon").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    document.getElementById("descripcion").innerHTML = data.weather[0].description;
})
}