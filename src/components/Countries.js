import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getAllCountries } from '../redux/countries/countries';
import { getWeatherData } from '../redux/weather/weather';
import '../App.css';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state.weatherReducer);
  console.log(weatherInfo);

  const city = 'lagos';

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, []);

  return (
    <div>
      <h3>{weatherInfo.name}</h3>
    </div>
  );
};

export const loadCountry = (e) => {
  <Weather />;
  console.log(e.target.alt || e.target.innerText);
  return e.target.alt || e.target.innerText;
};

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countriesRuducer);

  const handleSearch = (e) => {
    console.log(e.target.value, 'handleSearch');
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <>
      <input type="text" onChange={handleSearch} placeholder="Search" />
      <div className="page">
        {allCountries.map((country) => (
          // <Link to={country.name.common}>
          <Link to={`Countries/${country.name.official}`}>
            <div key={country.name.common} onClick={(e) => loadCountry(e)}>
              <div>
                {country.name.common}
                <img src={country.flags.png} alt={country.name.common} />
                {/* <img src={country.coatOfArms.png} alt={country.name.official} /> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
