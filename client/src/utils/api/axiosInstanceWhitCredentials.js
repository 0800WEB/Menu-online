import axios from "axios";
import { baseURL } from "../../config";

const axiosInstanceWithCredentials = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstanceWithCredentials;
