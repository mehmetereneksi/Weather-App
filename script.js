const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherContent = document.getElementById("weather-content");

const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");
const windArrow = document.getElementById("wind-arrow");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);

    if (!data) {
      alert("Something went wrong, please try again later");
      return;
    }

    const temp = data.main?.temp;
    const feels = data.main?.feels_like;
    const hum = data.main?.humidity;
    const windSpeed = data.wind?.speed;
    const gust = data.wind?.gust;
    const windDeg = data.wind?.deg;
    const mainWeather = data.weather?.[0]?.main;
    const icon = data.weather?.[0]?.icon;
    const cityName = data.name;

    locationEl.textContent = cityName !== undefined ? cityName : "N/A";
    mainTemperature.textContent = temp !== undefined ? `${temp}° C` : "N/A";
    weatherIcon.src = icon !== undefined ? icon : "";
    weatherIcon.alt = mainWeather !== undefined ? mainWeather : "N/A";
    weatherMain.textContent = mainWeather !== undefined ? mainWeather : "N/A";
    humidity.textContent = hum !== undefined ? `${hum}%` : "N/A";
    feelsLike.textContent = feels !== undefined ? `${feels}° C` : "N/A";
    wind.textContent = windSpeed !== undefined ? `${windSpeed} m/s` : "N/A";
    windGust.textContent = gust !== undefined ? `${gust} m/s` : "N/A";

    if (windDeg !== undefined) {
      windArrow.style.transform = `rotate(${windDeg}deg)`;
    }

    weatherContent.classList.remove("hidden");
  } catch (error) {
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (!selectedCity) return;
  showWeather(selectedCity);
});
