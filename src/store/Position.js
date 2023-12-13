import { Axios } from "../config/Axios";
import { ERROR_HANDLER, objectToParams } from "../utils/globalFunction";

export const getPosition = async (filter) => {
  try {
    const URL = '/system/position?' + objectToParams(filter);
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const getPositionbyId = async (id) => {
  try {
    const URL = `/system/position/${id}`;
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const updatePositionbyId = async (id, data) => {
  try {
    const URL = `/system/position/${id}`;
    const payload = data;
    const response = await Axios.put(URL, payload);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const createPosition = async (data) => {
  try {
    const URL = `/system/position`;
    const payload = data;
    const response = await Axios.post(URL, payload);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};