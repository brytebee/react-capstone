const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';

const initialState = [];

const getCountry = (payload) => ({
  type: GET_COUNTRY_DETAILS,
  payload,
});

export const getCountryDetails = (fullName) => async (dispatch) => {
  dispatch(
    getCountry(
      await (
        await fetch(`
        https://restcountries.com/v3.1/name/${fullName}?fullText=true`)
      ).json()
    )
  );
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
