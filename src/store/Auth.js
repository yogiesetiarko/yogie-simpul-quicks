import { Axios } from "../config/Axios";
import { ERROR_HANDLER } from "../utils/globalFunction";

export const Apilogin = async (payload) => {
  try {
    const URL = `login`;
    const response = await Axios.post(URL, payload);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};