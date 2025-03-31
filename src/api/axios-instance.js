import axios from "axios";
import { toast } from "sonner";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response, message, status } = error;
    if (!response) {
      toast.error("Network Error", {
        description: message || "Please check your internet connection.",
      });
    } else {
      switch (status) {
        case 400:
          toast.error("Bad Request", {
            description: message || "Invalid request. Please check your input.",
          });
          break;
        case 404:
          toast.error("Not Found", {
            description: message || "The requested resource was not found.",
          });
          break;
        case 500:
          toast.error("Server Error", {
            description: message || "Something went wrong on our end.",
          });
          break;
        default:
          toast.error("Error", {
            description: message || "An error occurred.",
          });
      }
    }
    return Promise.reject(error);
  }
);

export default api;
