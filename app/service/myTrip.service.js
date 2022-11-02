import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

//to get the trips of the user
export const trips = async () => {
  const response = await getApi()
    .get("/users/trips")
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
