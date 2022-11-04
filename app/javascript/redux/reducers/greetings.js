// URL
const URL = 'api/v1/greetings'

// Actions
const GET_GREETINGS = 'redux/reducers/greetings/GET_GREETINGS';

// Reducer
const greetingsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

// Action
const getGreetings = () => async (dispatch) => {
  const response = await fetch(URL);
  console.log(response);
  const greeting = await response.json();
  dispatch({
    type: GET_GREETINGS,
    payload: greeting,
  });
};

export { getGreetings, greetingsReducer };
