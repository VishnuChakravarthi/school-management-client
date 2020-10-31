export const facultyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};
