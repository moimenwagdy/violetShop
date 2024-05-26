import axios from "axios";

export async function getCategories() {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/category-list"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
