import { SET_TOKEN } from '../actions/type';

let initialState = {
  token: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { token: payload, ...state };
    default:
      return state;
  }
};

export default reducer;
