import axios from "axios";
import { Navigate } from "react-router-dom";
import { apiEndPoint } from "../constants/api_constants";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (config.url.includes(process.env.REACT_APP_API_URL)) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message.split(" ").includes("403" || 403)) {
      console.log(error);
      console.log(error.message.split(" ").includes("403" || 403));
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
      window.location.replace("/");
      // return <Navigate replace to="/" />;
    }
  }
);

export default axios;
