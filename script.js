const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const city_name = document.querySelector('.city_name');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "607e4cf67d9e04b59f810d1eba415d9d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const wheather_data = await fetch(`${url}`).then(Response =>
 Response.json());
    if (wheather_data.cod === "404" || inputBox.value == "") {
        location_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return;
    } else {
        location_not_found.style.display = "none"
        weather_body.style.display = "flex"

        temperature.innerHTML = `${Math.round(wheather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${wheather_data.weather[0].description}`
        city_name.innerHTML = wheather_data.name
        humidity.innerHTML = `${wheather_data.main.humidity} %`;
        wind_speed.innerHTML = `${wheather_data.wind.speed} km/H`;

        console.log(wheather_data)

        switch (wheather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "/Wheather App/assest/cloud.png"
                break;
            case 'Clear':
                weather_img.src = "/Wheather App/assest/clear.png";
                break
            case 'Rain':
                weather_img.src = "/Wheather App/assest/rain.png";
                break;
            case 'Mist':
                weather_img.src = "/Wheather App/assest/mist.png";
                break;
            case 'Snow':
                weather_img.src = "/Wheather App/assest/snow.png";
                break;

        }


    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value)
})
