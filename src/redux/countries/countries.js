const GET_COUNTRIES = 'GET_COUNTRIES';
const url = 'https://restcountries.com/v3.1/all';

const initialState = [];

const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getAllCountries = () => async (dispatch) => {
  dispatch(getCountries(await (await fetch(url)).json()));
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
