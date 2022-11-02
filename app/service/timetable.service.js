/**
 * Timetable services 
 */

import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

/**
 * 
 * @param {*} start -> Start Location
 * @param {*} end -> End Location
 * @returns PROMISE
 * 
 * searches and gets timetable by start location & end location
 */
export const timeTable = async (start, end) => {
  const axiosInstance = await getApi();
  const response = await axiosInstance
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
