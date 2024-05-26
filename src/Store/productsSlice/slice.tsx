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

const selectedProduct: product = {
  availabilityStatus: "",
  brand: "",
  category: "",
  dimensions: {
    width: 0,
    height: 0,
    depth: 0,
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
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: init,
    filteredProducts: init,
    isFetched: false,
    offset: 12,
    filter: filter,
    filterIsOpen: false,
    selectedProduct: selectedProduct,
  },
  reducers: {
    saveProducts: (state, action) => {
      const newArr = [...action.payload.products];
      const shuffledArray = Array.from({ length: newArr.length }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .map((i) => newArr[i]);
      state.products = shuffledArray;
      state.filteredProducts = [...shuffledArray];
      const rr = shuffledArray.filter((e) => {
        return e.images.length === 6;
      });
      console.log(rr);
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
    setFilterIsOpen: (state, action) => {
      state.filterIsOpen = action.payload;
    },
    ResetFilter: (state) => {
      state.filteredProducts = state.products;
      state.filter = [];
    },
    getSelectedProduct: (state, action) => {
      const selectedItem = state.products.find((product) => {
        return product.id === Number(action.payload);
      });
      state.selectedProduct = selectedItem!;
    },
  },
});

export default productsSlice;

export const productsAction = productsSlice.actions;
