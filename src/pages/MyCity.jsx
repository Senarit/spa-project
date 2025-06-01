import { useEffect, useState } from 'react';
import { getWeather } from '../api/weatherApi';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather('Pervomaisk').then(setWeather).catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Моє місто — Первомайськ</h1>
      <p>Первомайськ мальовниче місто на Південному Бузі з багатою історією, трьома річками та унікальним географічним розташуванням</p>

      {weather && (
        <div>
          <h2>Погода</h2>
          <p>Місто: {weather.location.name}</p>
          <p>Країна: {weather.location.country}</p>
          <p>Температура: {weather.current.temp_c}°C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: [{weather.location.lat}, {weather.location.lon}]</p>
        </div>
      )}
    </div>
  );
}

export default MyCity;
