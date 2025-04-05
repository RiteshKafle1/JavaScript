const apiKey = "your-api-key";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const inputField = document.querySelector("#inputfield");



const searchButton = document.querySelector("#btn");
searchButton.addEventListener("click", () => {
  const inputValue = inputField.value.trim();

  if (inputValue) {
    console.log(inputValue);
    checkWeather(inputValue);
  }
});

async function checkWeather(city) {
  const response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
  console.log(response);
  if (response.status === 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    const mainWeatherIcon = document.querySelector(".weather-icon");

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    if (data.weather[0].main === "Clouds") {
      mainWeatherIcon.src = "cloudy.png";
    } else if (data.weather[0].main === "Clear") {
      mainWeatherIcon.src = "partly-cloudy.png";
    } else if (data.weather[0].main === "Rain") {
      mainWeatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      mainWeatherIcon.src = "rainy-day.png";
    } else if (data.weather[0].main === "Mist") {
      mainWeatherIcon.src = "haze.png";
    }
  }
}
