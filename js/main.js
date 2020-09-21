
function helloWorld() 
{
    for (let i = 3; i > 0; i--) 
    {
        console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
}

helloWorld();

if ("geolocation" in navigator) {
    /* geolocation is available */
} else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
}

function findLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=c521ad9166a466e350bb67b61abeb6ab";
        displayWeather(apiUrl);
    });
}


function displayWeather(apiUrl){
    let country = document.getElementById('country');
    let city = document.getElementById('city');
    let currentTemperature = document.getElementById('currentTemperature');
    let minTemperature = document.getElementById('minTemperature');
    let maxTemperature = document.getElementById('maxTemperature');
    let humidity = document.getElementById('humidity');

    //uso de arrow functions
    // utilização de fetch API
    fetch(apiUrl).then((data) => {
        return data.json();

    }).then((data) => {
    
        country.innerText = `País: ${data.sys.country}`;
        city.innerText = `Cidade: ${data.name}`;
        currentTemperature.innerText = `Temperatura Atual: ${data.main.temp} °C`;
        minTemperature.innerText = `Máxima: ${data.main.temp_max} °C`;
        maxTemperature.innerText = `Mínima: ${data.main.temp_min} °C`;
        humidity.innerText = `Umidade do ar: ${data.main.humidity} %`;
        console.log(data);
    })
}

if (navigator.geolocation) {
    findLocation();
}