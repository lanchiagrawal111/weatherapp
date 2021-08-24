import React, { useEffect, useState } from "react";
import { APIUrls } from "../helpers/urls";
import Weather from "./Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("I am hete");
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        fetchWeather(lat, long);
      });
    };
    fetchData();
  }, [lat, long]);

  const fetchWeather = async (lat, long) => {
    const url = APIUrls.fetchWeatherUsingCords(lat, long);
    console.log(lat + "   " + long, url);
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(data);
        setData(result);
        console.log(result);
        console.log(data);
      });
  };
  const myFunction = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search !== "") {
      console.log(search);
      const url = APIUrls.fetchWeatherUsingCity(search);

      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.cod !== 404) {
            // setLat(result.coord.lat);
            // setLong(result.coord.lon);
            fetchWeather(result.coord.lat, result.coord.lon);
            // setData(result);
            console.log(data);
          } else {
            alert("Enter Valid Location");
          }
        });
    } else {
      alert("Enter a valid location");
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter a location"
          />
        </form>

        <img
          style={{
            width: 50,
            borderRadius: "50%",
            cursor: "pointer",
          }}
          src="https://as1.ftcdn.net/v2/jpg/03/87/72/58/500_F_387725818_unRqx7OcCU647jXSbOGWM02BWTJSux3f.jpg"
          alt="toggle-button"
          onClick={myFunction}
        />
      </div>
      {typeof data.current != "undefined" ? (
        <Weather weather={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
