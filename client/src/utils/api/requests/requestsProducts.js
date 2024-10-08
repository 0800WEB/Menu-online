import axiosInstance from "../axiosInstance";
import { PRODUCTS_URL_HTTP } from "../consts/products";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get(PRODUCTS_URL_HTTP.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Error buscando productos:", error);
    throw error;
  }
};
