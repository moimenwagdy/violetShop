import axios from "axios";
import product from "../types/Types";
const allProductsEndPoint = import.meta.env.VITE_ALL_VIOLET_PRODUCTS_ENDPOINT;
export default async function getFullProducts(): Promise<product[]> {
  try {
    const response = await axios.get(allProductsEndPoint);
    const fullArr: product[] = response.data.products;
    return fullArr;
  } catch (error) {
    throw error;
  }
}
