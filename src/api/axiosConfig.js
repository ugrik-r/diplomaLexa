import axios from "axios";
import { apiAuth } from "./apiAuth";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8081/",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("access")}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await apiAuth.apiAuthRefreshToken();
        localStorage.setItem("access", response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        localStorage.clear();
      }
    }
    throw error;
  }
);
export default api;
