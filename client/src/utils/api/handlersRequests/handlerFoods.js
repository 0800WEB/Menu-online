import { getAllProducts } from "../requests/requestsProducts";
import FoodModel from "../../models/foodModel";

export const fetchListFoods = async (
  currentProducts,
  dispatch,
  setAllProducts
) => {
  try {
    if (currentProducts.length > 0) {
      return currentProducts;
    }

    const data = await getAllProducts();

    if (!Array.isArray(data)) {
      throw new Error("La respuesta no es un array de productos");
    }

    const formattedProducts = data.map((product) => {
      const foodModelInstance = new FoodModel(product);
      return foodModelInstance.toPlainObject();
    });

    dispatch(setAllProducts(formattedProducts));

    return formattedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
