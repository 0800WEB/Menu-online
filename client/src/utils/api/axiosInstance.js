import axios from "axios";
import { baseURL } from "../../config";

const axiosInstace = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstace;
