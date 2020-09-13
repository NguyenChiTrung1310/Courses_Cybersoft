import { SET_TOKEN } from '../actions/type';

let initialState = {
  token: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};

export default reducer;
