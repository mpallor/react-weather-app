import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiKey = "t543fdb4184e920a39c183c0oaad1529";
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="/images/animated/snow-day.svg"
            className="WeatherForecast-icon"
          />
          <div>
            <span className="WeatherForecast -temp-max">19º</span>{" "}
            <span className="WeatherForecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
