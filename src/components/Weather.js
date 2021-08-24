import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);
  const { current, hourly, daily } = weather;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function displayTime(d) {
    var date = new Date(d * 1000);
    var hrs = date.getHours();
    var minutes = date.getMinutes();

    var formattedTime = hrs + ":" + minutes.toFixed();

    return formattedTime;
  }

  function displayDay(d) {
    var date = new Date(d * 1000);
    return days[date.getDay()];
  }

  return (
    <div>
      <div className="location-container">
        {/* <div className="location">
          {weather.name}, {weather.sys.country}
        </div> */}
        {/* <div className="date"> {dateBuild(new Date())}</div> */}
      </div>
      <div className="weather-container">
        <div className="temperature">{(current.temp - 273).toFixed(2)}°C</div>
        <div className="weather">
          {current.weather[0].description}
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0]?.icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <hr />

      <div className="weather-hourly-container">
        <p>Hourly Weather Report</p>
        {hourly.map((data) => {
          return (
            <div className="weather-hourly-info">
              <p>{displayTime(new Date(data.dt).getTime())}</p>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
                alt=""
              />
              <p>
                {parseInt((data.temp - 273).toFixed(2))}
                <sup>°c</sup>
              </p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="weather-daily-container">
        <p>Daily Weather Report</p>
        {daily.map((_daily) => {
          return (
            <div className="weather-daily-info">
              <img
                src={`http://openweathermap.org/img/wn/${_daily.weather[0].icon}@2x.png
                      `}
                alt=""
              />
              <div className="weather-min-max">
                <div className="weather-max">
                  <p>
                    {parseInt(_daily.temp?.max - 273).toFixed(2)}
                    <sup>°c</sup>
                  </p>
                </div>
                <div className="weather-min">
                  <p>
                    {parseInt(_daily.temp?.min - 273).toFixed(2)}
                    <sup>°c</sup>
                  </p>
                </div>
              </div>
              <p className="day">{displayDay(_daily.dt)}</p>
              <p>{_daily.weather && _daily.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
