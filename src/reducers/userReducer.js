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
        // user:
      };
    case "USER_PROFILE":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
