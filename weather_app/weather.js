
const apiKey = "20de24abfd7ee88f0385f2003c0576bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

         
async function checkWeather(cityName){
    try {
        const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);
        const weatherIcon = document.querySelector(".weather-icon");

        console.log(response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        //console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";

        const weatherMain = data.weather[0].main;
        switch (weatherMain) {
            case "Clouds":
                weatherIcon.src = "images_weather_app/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images_weather_app/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images_weather_app/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images_weather_app/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images_weather_app/mist.png";
                break;
        }

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

document.getElementById("cityNameBtn").addEventListener("click" , function(){

    const cityName = document.querySelector(".search input").value;
    checkWeather(cityName);

});

