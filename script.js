const apiKey = 'your_openweather_api_key';
const city = 'your_city';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('temperature').innerText = data.main.temp + '°C';
    document.getElementById('humidity').innerText = data.main.humidity + '%';
  })
  .catch(error => console.error('Error fetching the weather data:', error));
