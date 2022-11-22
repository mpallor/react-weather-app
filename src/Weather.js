import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      feels_like: Math.round(response.data.temperature.feels_like),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  function search() {
    const apiKey = `t543fdb4184e920a39c183c0oaad1529`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.traget.value);
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
                  className="form-control mt-2"
                  autocomplete="off"
                  autofocus="on"
                  placeholder="Search for a city"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 mt-2"
                  onSubmit={handleSubmit}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
