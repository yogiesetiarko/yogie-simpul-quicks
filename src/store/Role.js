import { Axios } from "../config/Axios";
import { ERROR_HANDLER, objectToParams } from "../utils/globalFunction";

export const getRole = async (filter) => {
  try {
    const URL = '/system/role?' + objectToParams(filter);
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const deleteRole = async (id) => {
  try {
    const URL = `/system/role/${id}`;
    const response = await Axios.delete(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};