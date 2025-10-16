import { useEffect, useState } from "react";

const weatherKey = import.meta.env.VITE_WEATHER_KEY;

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (capital) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weatherKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error(error));
    } else {
      setWeather(null);
    }
  }, [capital]);

  if (!weather) {
    return <div>Falla</div>;
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
