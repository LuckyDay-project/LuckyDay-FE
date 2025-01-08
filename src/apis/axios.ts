import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    const errorCode = error.response?.data?.code;

    if (status === 403 || errorCode === "1004") {
      window.dispatchEvent(new CustomEvent("ACCESS_DENIED"));
    }

    if (status === 401 || errorCode === "1001") {
      window.dispatchEvent(new CustomEvent("TOKEN_EXPIRED"));
    }

    return Promise.reject(error);
  }
);

export const ax = instance;
