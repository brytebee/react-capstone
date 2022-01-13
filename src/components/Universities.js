import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUniversities } from '../redux/universities/universities';
import { getWeatherData } from '../redux/weather/weather';

const Universities = () => {
  const dispatch = useDispatch();
  const allUni = useSelector((state) => state.universitiesReducer);
  const _10th = allUni.slice(0, 10);

  useEffect(() => {
    dispatch(getAllUniversities());
  }, []);

  return (
    <div className="page">
      {_10th.map((uni) => (
        <div className="">
          <h2>{uni.name.slice(0, 25)}...</h2>
          <h4>{uni.country}</h4>
          <p>{uni.web_pages[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default Universities;
