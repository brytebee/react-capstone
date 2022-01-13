const GET_WEATHER = 'GET_WEATHER';

const initialState = [];

const getWeather = (payload) => ({
  type: GET_WEATHER,
  payload,
});

export const getWeatherData = (city) => async (dispatch) => {
  dispatch(
    getWeather(
      await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0918530ef18aa662e2a688da5b76c196`
        )
      ).json()
    )
  );
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

export default weatherReducer;
