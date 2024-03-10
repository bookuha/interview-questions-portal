import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/",
  headers: {
    "Content-type": "application/json",
  },
});
client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("_auth");

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
export type { AxiosResponse, AxiosError };
