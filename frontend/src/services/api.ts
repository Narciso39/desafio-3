import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
