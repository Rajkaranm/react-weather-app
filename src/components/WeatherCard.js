import React, { useState, useEffect } from "react";
import "./WeatherCard.css";

// Will use Openweather API
// https://api.openweathermap.org/data/2.5/weather?q=africa&appid=fc665790184e1daf240550642acc635f

function WeatherCard(props) {
  // State to update city
  const [country, setCountry] = useState("africa");

  // state to get weather data
  const [weatherData, setWeatherData] = useState({
    name: null,
    temp: null,
    condition: null,
  });

  // It will get data after components are render properly
  useEffect(() => {
    const getWeatherData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=fc665790184e1daf240550642acc635f`;
      const respone = await fetch(url);
      const data = await respone.json();
      setWeatherData({
        name: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
      });
    };
    getWeatherData();
  }, [country]); // Country as a key when country will change it will re render the card component

  // we get temperature in frenhite we have to covert it to celcious
  const getTemperature = () => {
    return Math.floor(weatherData.temp - 273.15);
  };

  // This gets a date in proper formate
  const getDate = () => {
    let date = new Date();
    return date.toDateString();
  };

  // function to change country
  const changeCountry = (newCountry) => {
    setCountry(newCountry);
  };

  // Function to get id of a particular card so we can update each card individually
  const getNewCountryValue = () => {
    return document.getElementById(props.id).value;
  };

  return (
    <div className="weatherCard">
      <div className="deleteCard">
        <button id="deleteBtn" onClick={() => props.removeCard(props.id)}>
          ×
        </button>
      </div>
      <div className="inputField">
        <input
          className="newCountry"
          id={props.id}
          type="text"
          placeholder="City Name"
        />
        <button onClick={() => changeCountry(getNewCountryValue())}>Go</button>
      </div>
      <h5 className="location">{weatherData.name}</h5>
      <h4 className="temp">{getTemperature()}&#8451;</h4>
      <div className="info">
        <p>{getDate()}</p>
        <hr />
        <p>{weatherData.condition}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
