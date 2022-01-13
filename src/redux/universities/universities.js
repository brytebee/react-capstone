const GET_UNIVERSITIES = 'GET_COUNTRIES';
const url = 'http://universities.hipolabs.com/search?name=u';

const initialState = [];

const getUniversities = (payload) => ({
  type: GET_UNIVERSITIES,
  payload,
});

export const getAllUniversities = () => async (dispatch) => {
  dispatch(getUniversities(await (await fetch(url)).json()));
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIVERSITIES:
      return action.payload;
    default:
      return state;
  }
};

export default universitiesReducer;
