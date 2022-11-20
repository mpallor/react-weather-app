import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleWeather(response) {
    setWeatherData({
      ready: true,
      date: "21:48 Tuesday, 15 Nov.",
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      feels_like: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  autoComplete="off"
                  autoFocus="on"
                  placeholder="Search for a city"
                  className="form-control mt-2"
                ></input>
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 mt-2"
                ></input>
              </div>
              <div className="col-1">
                <a
                  className="current-position"
                  href="/"
                  title="Get Current Location"
                >
                  <i className="fa-solid fa-location-crosshairs"></i>
                </a>
              </div>
            </div>
          </form>
          <h1 className="mt-4">{weatherData.city}</h1>
          <p>Current weather</p>
          <h2 className="date mb-0">{weatherData.date}</h2>
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.icon}
                alt={weatherData.condition.description}
              ></img>

              <span className="temperature"> {weatherData.temperature}</span>
              <span className="unit">
                <a href="/" className="celsius-link">
                  ℃
                </a>{" "}
                |
                <a href="/" className="fahrenheit-link active">
                  ℉
                </a>
              </span>
              <div className="text-capitalize">{weatherData.description}</div>
            </div>

            <div className="col-3">
              <ul>
                <li className="">
                  <strong>Feels like:</strong>{" "}
                  <span>{weatherData.feels_like} ℃</span>
                </li>
                <li className="mt-4">
                  <strong>Wind:</strong> <span>{weatherData.wind} km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li className="">
                  <strong>Humidity:</strong>{" "}
                  <span>{weatherData.humidity} %</span>
                </li>
                <li className="mt-4">
                  <strong>Pressure:</strong>{" "}
                  <span>{weatherData.pressure} hPa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `t543fdb4184e920a39c183c0oaad1529`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeather);
    return "Loading";
  }
}
