// const API: `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api-key}&units=metric`;

const button = document.querySelector("#button");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const getweather = async (city) => {
  const url = ` https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=c694e36ec00f4623ae0ec833fcbd2921&units=metric`;
  const response = await fetch(url);

  const data = await response.json();

  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  weather.innerHTML = `
  
<div class="container">
  <div id="city_name">
${data.name}
  </div>
  <div class="colomn1">
  <img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" alt="">
  <h6>${Math.round((data.main.temp * 9) / 5 + 32)} °F |
  <span id="cel_temp">
  ${data.main.temp} ℃ 
  </span>
  </h6>
  
  

  </div>
     <div class= "colomn2">
    <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${
      data.weather[0].main
    }  <br />  <br />
     Wind Speed: ${data.wind.speed}  <br />
     Humidity: ${data.main.humidity}
     </p>
  </div>
  
  

</div>
`;
};
button.addEventListener("click", function (event) {
  getweather(search.value);
  event.preventDefault();
});
