import { toast } from "react-toastify";

export const ERROR_HANDLER = (error = {}) => {
  toast.error(error?.message || error || 'Undefined error', { autoClose: 1500 });
};

export const objectToParams = (obj) => {
  if (!obj) return '';
  var str = Object.keys(obj)
    .filter((key) => obj[key])
    .map(function (key) {
      return key + '=' + obj[key];
    })
    .join('&');
  return str;
};