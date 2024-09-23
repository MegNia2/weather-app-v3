import { useState } from "react";
import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: `Friday 8am`,
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
              ></input>
            </div>

            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100"></input>
            </div>
          </div>
        </form>
        <h3>{props.city}</h3>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img src={weatherData.icon} alt={weatherData.description} />

              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="celcius">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
