import { createSlice } from "@reduxjs/toolkit";
import product, { reviews } from "../../components/Products/types/Types";

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

const updatedReviews: reviews[] = [];

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
    allowFetch: true,
    offset: 12,
    filter: filter,
    filterIsOpen: false,
    selectedProduct: selectedProduct,
    updatedReviews: updatedReviews,
  },
  reducers: {
    saveProducts: (state, action: { payload: { products: product[] } }) => {
      const newArr = [...action.payload.products];
      const shuffledArray = Array.from({ length: newArr.length }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .map((i) => newArr[i]);
      state.products = shuffledArray;
      state.filteredProducts = [...shuffledArray];
      const rr = shuffledArray.filter((e) => {
        return e.id === 2;
      });
      state.isFetched = true;
      state.allowFetch = false;
    },
    dontAllowFetch: (state) => {
      state.allowFetch = false;
    },
    increaseOffsetBy: (state, action) => {
      if (state.filteredProducts.length <= 12) {
        return;
      } else state.offset += action.payload;
    },
    setFilterValues: (state, action) => {
      const filteredProducts = state.products.filter((product) => {
        if (action.payload.length === 0) {
          return state.products;
        } else {
          return action.payload.includes(product.category);
        }
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
      const selectedItem = state.filteredProducts.find((product) => {
        return product.id === Number(action.payload);
      });
      state.selectedProduct = selectedItem!;
    },
    updateReview: (
      state,
      action: { payload: { reviews: reviews; productID: number } }
    ) => {
      const { reviews: newReview, productID } = action.payload;

      const updateReviews = (products: product[]) =>
        products.map((product) =>
          product.id === productID
            ? { ...product, reviews: [...product.reviews, newReview] }
            : product
        );

      state.products = updateReviews(state.products);
      state.filteredProducts = updateReviews(state.filteredProducts);

      if (state.selectedProduct.id === productID) {
        state.selectedProduct = {
          ...state.selectedProduct,
          reviews: [...state.selectedProduct.reviews, newReview],
        };
      }

      state.updatedReviews = [...state.updatedReviews, newReview];
    },
  },
});

export default productsSlice;

export const productsAction = productsSlice.actions;
