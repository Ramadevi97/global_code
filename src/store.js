import { createStore } from 'redux';

// Action types
const SET_USER = 'SET_USER';

// Action creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Initial state
const initialState = {
  user: {
    name: '',
    age: 0,
    email: '',
  },
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
