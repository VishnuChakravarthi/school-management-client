export const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL_COURSES":
      return {
        ...state,
        allCourses: action.payload,
      };
    case "FETCH_STU_COURSES":
      return {
        ...state,
        regCourses: action.payload,
      };
    case "REG_COURSE":
      return {
        ...state,
        allCourses: action.payload,
      };
    default:
      return state;
  }
};
