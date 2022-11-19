import React from "react";

import "./Weather.css";

export default function Weather() {
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
        <h1 className="mt-4">Krakow</h1>
        <p>Current weather</p>
        <h2 className="date mb-0">21:48 Tuesday, 15 Nov.</h2>
        <div className="row">
          <div className="col-6">
            <img src="/../images/cloudy.png" alt="Cloudy weather"></img>

            <span className="temperature"> 6</span>
            <span className="unit">
              <a href="/" className="celsius-link">
                ℃
              </a>{" "}
              |
              <a href="/" className="fahrenheit-link active">
                ℉
              </a>
            </span>
            <div>Cloudy</div>
          </div>

          <div className="col-3">
            <ul>
              <li className="">
                <strong>Feels like:</strong> <span>8 ℃</span>
              </li>
              <li className="mt-4">
                <strong>Wind:</strong> <span>1 km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li className="">
                <strong>Humidity:</strong> <span>88 %</span>
              </li>
              <li className="mt-4">
                <strong>Pressure:</strong> <span>1009 hPa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
