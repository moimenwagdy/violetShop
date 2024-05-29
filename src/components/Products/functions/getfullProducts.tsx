import axios from "axios";
import product from "../types/Types";

export default async function getFullProducts(): Promise<product[]> {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=0"
    );
    const fullArr: product[] = response.data.products;
    return fullArr;
  } catch (error) {
    throw error;
  }
}
