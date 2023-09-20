document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const weatherData = document.getElementById('weatherData');

    searchButton.addEventListener('click', function () {
        const location = locationInput.value;

        // Simulate fetching weather data from an API (replace with actual API call)
        // For demonstration purposes, we'll display hardcoded weather data.
        const weatherInfo = {
            location: location,
            temperature: '25°C',
            description: 'Sunny with some clouds',
            humidity: '65%',
            wind: '5 km/h'
        };

        displayWeatherInfo(weatherInfo);
    });

    function displayWeatherInfo(weatherInfo) {
        weatherData.innerHTML = `
            <p><strong>Location:</strong> ${weatherInfo.location}</p>
            <p><strong>Temperature:</strong> ${weatherInfo.temperature}</p>
            <p><strong>Description:</strong> ${weatherInfo.description}</p>
            <p><strong>Humidity:</strong> ${weatherInfo.humidity}</p>
            <p><strong>Wind:</strong> ${weatherInfo.wind}</p>
        `;
    }
});
