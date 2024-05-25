import { createSlice } from "@reduxjs/toolkit";
import product from "../../components/Products/types/Types";

const init: product[] = [
  {
    availabilityStatus: "",
    brand: "",
    category: "",
    dimensions: {
      width: 0,
      height: 0,
      depth: undefined,
    },
    discountPercentage: 0,
    id: 0,
    images: [],
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    minimumOrderQuantity: 0,
    returnPolicy: "",
    description: "",
    reviews: [],
    shippingInformation: "",
    stock: 0,
    tags: [],
    thumbnail: "",
    title: "",
    warrantyInformation: "",
    price: 0,
    rating: 0,
    weight: 0,
  },
];
interface st {
  filter: string;
}
const filter: st[] = [];

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: init,
    filteredProducts: init,
    isFetched: false,
    offset: 12,
    filter: filter,
  },
  reducers: {
    saveProducts: (state, action) => {
      state.products = [...action.payload.products];
      state.filteredProducts = [...action.payload.products];
    },
    Fetched: (state, action) => {
      state.isFetched = action.payload;
    },
    increaseOffsetBy: (state, action) => {
      state.offset += action.payload;
    },
    setFilterValues: (state, action) => {
      const filteredProducts = state.products.filter((pro) => {
        if (action.payload.length === 0) {
          return state.products;
        } else return action.payload.includes(pro.category);
      });
      state.filteredProducts = filteredProducts;
    },
  },
});

export default productsSlice;

export const productsAction = productsSlice.actions;
