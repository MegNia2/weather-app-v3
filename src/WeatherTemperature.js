import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="celcius">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="celcius">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
