import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  REGISTER_USER,
  AUTH_ERROR,
  SET_LOADING,
  EDIT_USER_FAIL,
  EDIT_USER_SUCESS,
  GET_USER_LOAD,
  GET_USER_SUCESS,
  GET_USER_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
} from "../ActionTypes/AuthTypes";

// Set loading
export const setLoading = () => ({
  type: SET_LOADING,
});

// Register user
export const register = (formData, navigate) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post("/api/auth/signup", formData);

    dispatch({
      type: REGISTER_USER,
      payload: res.data, // { msg: "register Success", user, token }
    });
    navigate("/ExodUS_Pro_Vision_G_Accounts");
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
      payload: error.response ? error.response.data : { msg: "Server Error" },
    });
  }
};


// login user

export const login = (formData, navigate) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const res = await axios.post("/api/auth/signin", formData);

    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
    navigate("/Home_Super_Admin");
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};

// get auth user

export const getAuthUser = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get("/api/auth/me", options);
    console.log(res);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};

export const toggleFalse = () => {
  return { type: TOGGLE_FALSE };
};

export const EditUser = (userId, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/auth/${userId}`, newUser);
    dispatch({ type: EDIT_USER_SUCESS });
    dispatch(getAuthUser());
    window.location.replace("/");
  } catch (error) {
    dispatch({ type: EDIT_USER_FAIL, payload: error.response.data });
  }
};

export const getUser = (userId) => async (dispatch) => {
  dispatch({ type: GET_USER_LOAD });
  try {
    // let result = await axios.get(`/api/user/620cdbdf079b01b35e7dc37b`);
    let result = await axios.get(`/api/user/${userId}`);
    dispatch({ type: GET_USER_SUCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

