import axios from "axios";
import constants from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getApi = async () => {
  const token = await AsyncStorage.getItem("token");

  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: token ? "Bearer " + token : null,
      "Content-Type": "application/json",
    },
  });
};
