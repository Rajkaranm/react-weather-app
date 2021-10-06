import React from "react";
import "./WeatherCard.css"

// https://api.openweathermap.org/data/2.5/weather?q=africa&appid=fc665790184e1daf240550642acc635f

const getDate = () => {
  let date = new Date();
  return date.toDateString();
}

function WeatherCard() {
  const api = {
    coord: {
      lon: 21.0938,
      lat: 7.1881,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 301.22,
      feels_like: 304.23,
      temp_min: 301.22,
      temp_max: 301.22,
      pressure: 1008,
      humidity: 72,
      sea_level: 1008,
      grnd_level: 944,
    },
    visibility: 10000,
    wind: {
      speed: 0.71,
      deg: 153,
      gust: 1.39,
    },
    rain: {
      "1h": 0.57,
    },
    clouds: {
      all: 89,
    },
    dt: 1633443483,
    sys: {
      sunrise: 1633407778,
      sunset: 1633451091,
    },
    timezone: 3600,
    id: 6255146,
    name: "Africa",
    cod: 200,
  };

  const getTemperature = () => {
      let num = api.main.temp;
      return Math.floor(num - 273.15)
  }
  return (
      <div className="weatherCard">
        <div class="inputField">
          <input type="text"/>
          <button>Go</button>
        </div>
        <h4 className="temp">{getTemperature()}&#8451;</h4>
        <div className="info">
          <p>{getDate()}</p>
          <hr />
          <p>{api.weather[0].main}</p>
        </div>
        
      </div>
  );
}

export default WeatherCard;
