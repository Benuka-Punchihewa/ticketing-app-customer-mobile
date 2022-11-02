import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

//to get the time table
export const timeTable = async (start, end) => {
  const response = await getApi()
    .get("/timetables", {
      params: {
        start,
        end,
      },
    })
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
