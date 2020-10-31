import axios from "axios";
import history from "../components/History";

const baseURL = "http://localhost:8000";

export const userRegister = () => async (dispatch, getState) => {
  // console.log(getState().form.genForm.values);
  const data = getState().form.genForm.values;
  delete data.confirmPassword;
  const response = await axios.post(`${baseURL}/users/create`, { data });
  dispatch({ type: "USER_REGISTER", payload: response.data });
  history.push("/home");
};

export const userLogin = (email, password) => async (dispatch) => {
  const response = await axios.post(`${baseURL}/users/login`, {
    email,
    password,
  });
  console.log(response.data);
  dispatch({ type: "USER_LOGIN", payload: response.data });
  history.push("/home");
};

export const userLogout = () => async (dispatch, getState) => {
  const token = getState().user.token;
  await axios.post(
    `${baseURL}/users/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({ type: "USER_LOGOUT" });
  history.push("/");
};

export const fetchCourses = () => async (dispatch, getState) => {
  const token = getState().user.token;
  const response = await axios.get(`${baseURL}/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data);
  dispatch({ type: "FETCH_COURSES", payload: response.data });
};

export const fetchRegCourses = () => async (dispatch, getState) => {
  const token = getState().user.token;
  const response = await axios.get(`${baseURL}/courses/student`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data);
  dispatch({ type: "FETCH_STU_COURSES", payload: response.data });
};

export const fetchAllCourses = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}/allcourses`);
  // console.log(response.data);
  dispatch({ type: "FETCH_ALL_COURSES", payload: response.data });
};

export const fetchProfile = () => async (dispatch, getState) => {
  const token = getState().user.token;
  const response = await axios.get(`${baseURL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  dispatch({ type: "USER_PROFILE", payload: response.data });
};
