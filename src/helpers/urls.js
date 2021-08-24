const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "a2b1c2b60207d295e1ffb2f839310926";
export const APIUrls = {
  fetchWeatherUsingCords: (lat, lon) =>
    `${API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  fetchWeatherUsingCity: (city) =>
    `${API_URL}/weather?q=${city}&appid=${API_KEY}`,
};
// ICON_URL = "https://openweathermap.org/img/w";
