import Axios from "axios";
import backendServer from "../../webConfig";
import { SIGNUP, ERROR } from "../types";
export const signupRedux = data => async dispatch => {
  console.log(`${backendServer}/userRouter/signup`);
  await Axios.post(`${backendServer}/userRouter/signup`, data)
    .then(response => {
      dispatch({
        type: SIGNUP,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      });
    });
};