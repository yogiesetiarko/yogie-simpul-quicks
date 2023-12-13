import axios from 'axios';
import Cookies from 'js-cookie';


const token = Cookies.get('token');


// import mHelper from "../config/Helper"
// eslint-disable-next-line no-undef
export const URL_API = process.env.REACT_APP_URL_API;

export const Axios = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': ['text/plain', 'application/json'],
  },
});

Axios.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Axios.interceptors.response.use(
  async function (response) {
    // Do something with response data
    return await response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.href = '/login';
      return;
    }
    // toast.error(error?.response?.data?.errors?.[0].message || error.message, {
    //   position: 'top-right',
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   theme: 'light',
    // });
    // Do something with response error
    return Promise.reject(error);
  }
);
