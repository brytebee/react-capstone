import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountryDetails } from '../redux/countries/country';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.countryReducer);
  console.log(details, 'details');

  const { country } = useParams();

  useEffect(() => {
    dispatch(getCountryDetails(country));
  }, []);

  return (
    <div>
      {details.map((country) => (
        <div
          className="container"
          style={{
            backgroundImage: `url(${country.flags.svg})`,
            color: 'white',
          }}
        >
          <h2>{country.name.official}</h2>
          <img src={country.flags.png} alt={country.name.common} />
          <p>
            <i>Capital city: </i>
            <strong>{country.capital}</strong>
          </p>
          <h4>
            {country.subregion}, {country.continents[0]}
          </h4>
          <section>
            <p>{country.timezones[0]}</p>
            {/* {country.languages.map(({ key, value }) => (
              <p>{value}</p>
            ))} */}
            <p>
              Population ±{' '}
              <strong>{country.population.toLocaleString()}</strong>
            </p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
