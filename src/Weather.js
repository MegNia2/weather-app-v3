import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" className="form-control"></input>
          </div>

          <div className="col-3">
            <input type="submit" className="btn btn-primary w-100"></input>
          </div>
        </div>
      </form>
      <h3>London</h3>
      <p>Friday, Clear</p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun-icon"
            />

            <span className="temperature">18</span>
            <span className="celcius">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 69%</li>
            <li>Wind: 6mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
