export const facultyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return { ...state, courses: action.payload };
    case "GET_COURSE":
      return { ...state, course: action.payload };
    default:
      return state;
  }
};
