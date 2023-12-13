import { Axios } from "../config/Axios";
import { ERROR_HANDLER } from "../utils/globalFunction";

export const getUser = async () => {
  try {
    const URL = '/system/user';
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};