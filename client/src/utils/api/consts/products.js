const PRODUCTS_URL = "/api/products";

export const PRODUCTS_URL_HTTP = {
  GET_ALL: `${PRODUCTS_URL}`,
  CREATE: `${PRODUCTS_URL}`,
  GET_BY_ID: (id) => `${PRODUCTS_URL}/${id}`,
  UPDATE: (id) => `${PRODUCTS_URL}/${id}`,
  DELETE: (id) => `${PRODUCTS_URL}/${id}`,
};
