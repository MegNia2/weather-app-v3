import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function temperatureMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function showDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>{showDate()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div>
        <span className="max-temperature">{temperatureMax()}</span>
        <span className="min-temperature">{temperatureMin()}</span>
      </div>
    </div>
  );
}
