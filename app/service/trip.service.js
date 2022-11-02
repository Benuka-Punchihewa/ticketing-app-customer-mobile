/**
 * Trip Services
 */

import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

/**
 *
 * gets user's previous trips
 */
export const trips = async () => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
    .get("/users/trips")
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
