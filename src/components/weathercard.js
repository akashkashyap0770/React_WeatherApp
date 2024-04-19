import React, { useEffect, useState } from "react";

// main img:-
import SunnyImg from "./images/wi-day-sunny.svg";
import CloudsImg from "./images/wi-cloudy.svg";
import HazeImg from "./images/wi-day-haze.svg";
import MistImg from "./images/wi-sandstorm.svg";
import SnowImg from "./images/wi-snow.svg";

import sunsetImg from "./images/wi-sunset.svg";
import humidityImg from "./images/wi-humidity.svg";
import pressureImg from "./images/wi-rain.svg";
import speedImg from "./images/wi-strong-wind.svg";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    cityName,
    speed,
    country,
    sunset,
  } = tempInfo;

  // converting the seconds into time:-
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  // weathermood code:-
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState(CloudsImg);
          break;

        case "Haze":
          setWeatherState(HazeImg);
          break;

        case "Clear":
          setWeatherState(SunnyImg);
          break;

        case "Mist":
          setWeatherState(MistImg);
          break;

        case "Snow":
          setWeatherState(SnowImg);
          break;

        default:
          setWeatherState(SunnyImg);
          break;
      }
    }
  }, [weatherMood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img
            src={weatherState ? weatherState : SunnyImg}
            alt="sunny"
            className="sunny"
          />
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp ? temp : "Temperature"}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {cityName} {country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleTimeString()}</div>

        {/* Our Four Column Section */}

        <div className="extra-detail">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <span>
                <img src={sunsetImg} alt="sunset" className="" />
                <span className="extra-info-leftside">
                  {sunset ? timeStr : "0:00"} Sunset
                </span>
              </span>
            </div>

            <div className="two-sided-section">
              <span>
                <img src={humidityImg} alt="humiditie" className="" />
                <span className="extra-info-leftside">
                  {humidity ? humidity : "0"} &deg;Degree
                </span>
              </span>
            </div>

            <div className="two-sided-section">
              <span>
                <img src={pressureImg} alt="pressure" className="" />
                <span className="extra-info-leftside">
                  {pressure ? pressure : "0"} Pressure
                </span>
              </span>
            </div>

            <div className="two-sided-section">
              <span>
                <img src={speedImg} alt="speed" className="" />
                <span className="extra-info-leftside">
                  {speed ? speed : "0"} Speed
                </span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
