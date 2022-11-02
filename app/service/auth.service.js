/**
 * Auth Services
 */

import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

/**
 *
 * @param {*} data -> {username: "", password: ""}
 *
 * login user
 */
export const login = async (data) => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
    .post("/auth/login", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

/**
 *
 * @param {*} data
 *
 * Creates a customer account
 */
export const createCustomer = async (data) => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
    .post("/users/customer", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

/**
 *
 * gets user profile
 */
export const getUserProfile = async () => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
    .get("/users/profile")
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
