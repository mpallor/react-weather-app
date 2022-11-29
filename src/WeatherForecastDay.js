import React from "react";

export default function WeatherForecastDay(props) {
  let icon = props.data.condition.icon;

  function maxTemperature() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}º`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={`images/animated/${icon}.svg`}
        className="WeatherForecast-icon"
        alt="weather icon"
      />
      <div>
        <span className="WeatherForecast -temp-max">{maxTemperature()}</span>{" "}
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
