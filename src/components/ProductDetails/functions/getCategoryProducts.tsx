import axios from "axios";
import product from "../../Products/types/Types";
const similarItemsEndPoint = import.meta.env.VITE_SIMILAR_ITEMS_ENDPOINT;
export async function getCategory(category: string): Promise<product[]> {
  const response = await axios.get(
    `${similarItemsEndPoint}/${category}?limit=5`
  );
  return response.data.products;
}
