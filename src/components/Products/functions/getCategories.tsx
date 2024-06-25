import axios from "axios";
const categoriesEndPoint = import.meta.env
  .VITE_VIOLET_PRODUCTS_CATEGORIES_ENDPOINT;
  
export async function getCategories() {
  try {
    const response = await axios.get(categoriesEndPoint);
    return response.data;
  } catch (error) {
    throw error;
  }
}
