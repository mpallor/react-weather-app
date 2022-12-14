import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-4">{props.data.city}</h1>
      <p>Current weather</p>
      <h2 className="date mb-0">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt="Cloudy"></img>
          <WeatherTemperature celsius={props.data.temperature} />

          <div className="text-capitalize">{props.data.description}</div>
        </div>

        <div className="col-3">
          <ul>
            <li className="">
              <strong>Feels like:</strong>{" "}
              <span>{props.data.feels_like} ℃</span>
            </li>
            <li className="mt-4">
              <strong>Wind:</strong> <span>{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li className="">
              <strong>Humidity:</strong> <span>{props.data.humidity} %</span>
            </li>
            <li className="mt-4">
              <strong>Pressure:</strong> <span>{props.data.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
