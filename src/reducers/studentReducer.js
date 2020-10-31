export const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STU_COURSES":
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};
