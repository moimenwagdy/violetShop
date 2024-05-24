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

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: { products: init, isFetched: false },
  reducers: {
    saveProducts: (state, action) => {
      state.products = [...action.payload.products];
    },
    Fetched: (state, action) => {
      state.isFetched = action.payload;
    },
  },
});

export default productsSlice;

export const productsAction = productsSlice.actions;
