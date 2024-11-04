const apiKey = "8f8ac19c43f74c0ea49efda46c93a173";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //doubt
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

const weatherMain = document.querySelector('.weather');

async function checkweather(City) {
  const response = await fetch(apiUrl + City + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }
  else{
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
  
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = '/weather_project/clouds.png';
    }
    else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = '/weather_project/clear.png';
    }
    else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = '/weather_project/rain.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = '/weather_project/drizzle.png';
    }
    else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = '/weather_project/mist.png';
    }
    weatherMain.style.display = 'block';
    document.querySelector('.error').style.display = 'none';

  }
  
}

searchBtn.addEventListener('click', () => {
  checkweather(searchBox.value);
})

