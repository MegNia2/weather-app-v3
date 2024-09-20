import React from "react";

export default function Weather() {
  return (
    <div>
      <form>
        <input type="search"></input>
        <input type="submit"></input>
      </form>
      <h3>London</h3>
      <div className="row">
        <div className="col-3">
          <h4>18°C</h4>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sun-icon"
          />
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 69%</li>
            <li>Wind: 6mph</li>
          </ul>
        </div>
        <div className="col-9">
          <h4>Weather</h4>
          <ul>
            <li>Friday</li>
            <li>Clear</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
