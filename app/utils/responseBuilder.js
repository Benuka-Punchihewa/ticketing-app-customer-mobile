/**
 *
 * @param {*} success
 * @param {*} data
 * @param {*} statusCode
 *
 * Builds response body
 */
export const buildResponse = async (success, data, statusCode) => {
  return { success: success, data: data };
};
