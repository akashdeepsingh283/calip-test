import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL environment variable. " +
    "Set it in .env or Vercel project settings."
  );
}

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("calip_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const message =
        data?.message ||
        data?.error ||
        getDefaultErrorMessage(status);
      const apiError = new Error(message);
      apiError.status = status;
      apiError.data = data;
      return Promise.reject(apiError);
    }
    if (error.request) {
      const networkError = new Error(
        "Network error. Please check your connection."
      );
      networkError.status = 0;
      return Promise.reject(networkError);
    }
    return Promise.reject(error);
  }
);

function getDefaultErrorMessage(status) {
  switch (status) {
    case 400:
      return "Please check your information and try again.";
    case 401:
      return "Authentication required.";
    case 404:
      return "Service unavailable.";
    case 500:
      return "Something went wrong. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default api;
