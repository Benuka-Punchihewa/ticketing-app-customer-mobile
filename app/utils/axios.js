import axios from "axios";
import constants from "../../constants";

export const getApi = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: token ? "Bearer " + token : null,
      "Content-Type": "application/json",
    },
  });
};
