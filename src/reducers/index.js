import { combineReducers } from "redux";
import { reducer } from "redux-form";
import { userReducer } from "./userReducer";
import { studentReducer } from "./studentReducer";
import { facultyReducer } from "./facultyReducer";

const appReducer = combineReducers({
  user: userReducer,
  faculty: facultyReducer,
  student: studentReducer,
  form: reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
