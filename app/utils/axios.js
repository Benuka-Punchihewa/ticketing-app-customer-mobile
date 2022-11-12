import axios from "axios";
import constants from "../../constants";
import store from "../store";

// creates an axios instance
export const getApi = async () => {
  // JWT Token
  const newState = store.getState();

  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: newState.token ? "Bearer " + newState.token : null,
      "Content-Type": "application/json",
    },
  });
};
