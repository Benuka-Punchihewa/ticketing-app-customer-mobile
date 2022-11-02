import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

//to validate user login
export const loging = async (data) => {
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

//to create a new customer
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

//to get the user profile details
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
