import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from '../redux/weather/weather';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state.weatherReducer);
  console.log(weatherInfo);

  const city = [
    'free town',
    'lagos',
    'laos',
    'budapest',
    'paris',
    'madrid',
    'barcelona',
    'tokyo',
    'hong kong',
    'delhi',
    'shangai',
    'valencia',
    'Mexico City,',
    'Beijing',
    'Osaka',
    'cordoba',
    'port harcourt',
  ];

  useEffect(() => {
    dispatch(
      getWeatherData(city[Math.floor(Math.random(city.length) * city.length)])
    );
  }, []);

  return (
    <div className="container">
      {(weatherInfo.id && (
        <div>
          <h2>
            {weatherInfo.name}, {weatherInfo.sys.country}
          </h2>
          {weatherInfo.name && (
            <div>
              <p>{weatherInfo.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`}
                alt={`Current weather in ${weatherInfo.name}`}
              />
              <div>
                <h4>Weather Summary</h4>
                <p>Temperature: {Math.ceil(weatherInfo.main.temp - 273.15)}℃</p>
                <p>Humidity: {weatherInfo.main.humidity}%</p>
                <p>Wind speed: {weatherInfo.wind.speed}m/sec</p>
              </div>
            </div>
          )}
        </div>
      )) || <h1>{weatherInfo.message}</h1>}
    </div>
  );
};

export default Weather;
