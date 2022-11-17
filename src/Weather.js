import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
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
          </div>
        </form>
        <h1>Krakow</h1>
        <p>Current weather</p>
        <h2>21:48 Tuesday, 15 Nov.</h2>
        <div className="row">
          <div className="col-6">
            <img src="/../images/cloudy.png" alt="Cloudy weather"></img>
            <span> 6℃</span>
            <div>Cloudy</div>
          </div>
          <div className="col-3">
            <ul>
              <li>Feels like: 8℃</li>
              <li>Wind: 1km/h</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>Humidity: 88 %</li>
              <li>Pressure: 1009 hPa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
