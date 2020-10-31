const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  token: null,
  status: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_REGISTER":
    case "USER_LOGIN":
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.token,
        status: action.payload.user.type.toLowerCase(),
      };
    case "USER_PROFILE":
      return {
        ...state,
        user: action.payload,
      };
    case "FETCH_ALL_COURSES":
      return {
        ...state,
        allCourses: action.payload,
      };

    default:
      return state;
  }
};
