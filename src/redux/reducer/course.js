import { SET_COURSES } from '../actions/type';

let initialState = {
  courseList: [],
  // selectedCourse: null,
  // detailCourse: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COURSES:
      state.courseList = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
