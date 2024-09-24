import { useState } from "react";
import React from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function updateForm(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={updateForm}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100"></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
