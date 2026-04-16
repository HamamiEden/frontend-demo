import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL,
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (process.env.NODE_ENV === "development" && axios.isCancel(err)) return Promise.resolve([]);

    return Promise.reject(err);
  }
);

export default axiosInstance;
