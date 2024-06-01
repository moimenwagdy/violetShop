import axios from "axios";
import product from "../../Products/types/Types";

export async function getCategory(category: string): Promise<product[]> {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}?limit=5`
  );
  return response.data.products;
}
