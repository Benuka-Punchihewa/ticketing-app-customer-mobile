import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

//to validate user login
export const loging = async (data) => {
  const response = await getApi()
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
  const response = await getApi()
    .post("/users/customer", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
