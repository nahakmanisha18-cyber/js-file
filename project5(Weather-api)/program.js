let text = document.querySelector("#search");
let button = document.querySelector("#searchBtn");
let weather = document.querySelector("#datashow");

button.addEventListener("click", () => {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=442854ddb4eb101cd375ab66a8d0d5b8&units=metric`)
    .then(res => res.json())
    .then(data => {
      
        if (data.cod !== 200) {
        weather.innerHTML = `
          <div class="error">
             City not found <br>
            <small>Please enter a valid city name</small>
          </div>
        `;
        return;
      }

      weather.innerHTML = `
        <div class="weather-card mt-4">
          <h3>${data.name}</h3>

          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

          <div class="temp">${Math.round(data.main.temp)}°C</div>
          <div class="desc">${data.weather[0].description}</div>

          <div class="extra">
            <div>
              <h6>${data.main.humidity}%</h6>
              <small>Humidity</small>
            </div>
            <div>
              <h6>${data.wind.speed} km/h</h6>
              <small>Wind</small>
            </div>
          </div>
        </div>
      `;
    });
});