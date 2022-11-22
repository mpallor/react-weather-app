import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToCelsius(event) {
    setUnit("metric");
  }

  if (unit === `metric`) {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |{" "}
          <a
            href="/"
            className="fahrenheit-link active"
            onClick={convertToFahrenheit}
          >
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit)}</span>
        <span className="unit">
          {" "}
          <a
            href="/"
            className="fahrenheit-link active"
            onClick={convertToCelsius}
          >
            ℃
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
