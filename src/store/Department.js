import { Axios } from "../config/Axios";
import { ERROR_HANDLER, objectToParams } from "../utils/globalFunction";

export const getDepartment = async (filter) => {
  try {
    const URL = '/system/department?' + objectToParams(filter);
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const getAllDepartment = async () => {
  try {
    const URL = '/system/department/all';
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const getAllBranch = async () => {
  try {
    const URL = '/system/branch/all';
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const getDepartmentById = async (id) => {
  try {
    const URL = `/system/department/${id}`;
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const updateDepartmentbyId = async (id, data) => {
  try {
    const URL = `/system/department/${id}`;
    const payload = data;
    const response = await Axios.put(URL, payload);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};

export const createDepartment = async (data) => {
  try {
    const URL = `/system/department`;
    const payload = data;
    const response = await Axios.post(URL, payload);
    return response.data;
  } catch (error) {
    ERROR_HANDLER(error);
  }
};