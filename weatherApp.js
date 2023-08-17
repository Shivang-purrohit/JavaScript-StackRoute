function getWeatherReport() {
    const city = document.getElementById("cityInput");
    const cityName = city.value.trim();
    const API_key = 'ca07232f4c09bc3a0b8d4011d4be17cd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const text = document.getElementById("weather_output");
        text.innerHTML = `
          <div class="card text-center " >
            <div class="card-header" id="heading"><strong>${data.name}</strong></div>
            <div class="card-body" >
            
              <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
              <p><strong>Feels like:</strong> ${data.main.feels_like}°C</p>
              <p><strong>Min & Max Temp:</strong> ${data.main.temp_min}°C : ${data.main.temp_max}°C</p>
              <p><strong>Humidity:</strong> ${data.main.humidity}</p>
              <p><strong>Wind Speed:</strong> ${data.wind.speed} km/h</p>
            </div>
            <div class="card-footer text-muted">
              <p><strong>Latitude and Longitude:</strong> ${data.coord.lat}, ${data.coord.lon}</p>
            </div>
          
          </div>
        `;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  