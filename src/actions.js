import axios from "axios";
import {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED
} from "./actions_types";

export const fetchAllUsers = () => dispatch => {
  dispatch({
    type: FETCH_ALL_USERS_START
  });

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      dispatch({
        type: FETCH_ALL_USERS_SUCCESS,
        payload: response.data.products
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ALL_USERS_FAILED,
        payload: error.message
      });
    });
};
