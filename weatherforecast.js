const apiKey = 'YOUR_ACTUAL_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('weather-description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} km/h`;

            fetchForecast(city);
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function fetchForecast(city) {
    try {
        const response = await fetch(`=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';

        for (let i = 0; i < data.list.length; i += 8) {
            const forecast = data.list[i];

            const card = document.createElement('div');
            card.classList.add('forecast-card');

            const date = new Date(forecast.dt_txt).toLocaleDateString();
            const temp = `Temp: ${forecast.main.temp}°C`;
            const desc = forecast.weather[0].description;

            card.innerHTML = `
                <p>${date}</p>
                <p>${temp}</p>
                <p>${desc}</p>
            `;

            forecastContainer.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}
