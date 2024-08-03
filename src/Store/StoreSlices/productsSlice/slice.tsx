import { createSlice } from "@reduxjs/toolkit";
import product, { reviews } from "../../../components/Products/types/Types";

const init: product[] = [];

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
    selectedProduct: selectedProduct,
    filterIsOpen: false,
    isFiltering: false,
    allowFetch: true,
    isFetched: false,
    offset: 12,
    updatedReviews: updatedReviews,
    hightRecommended: init,
    mostDiscount: init,
    isLoading: false,
  },
  reducers: {
    saveProducts: (state, action: { payload: { products: product[] } }) => {
      const newArr = [...action.payload.products];
      newArr.map((item) => {
        if (
          item.minimumOrderQuantity > item.stock ||
          item.minimumOrderQuantity > 10
        ) {
          item.minimumOrderQuantity = 1;
        }
      });
      const shuffledArray = Array.from({ length: newArr.length }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .map((i) => newArr[i]);
      state.products = shuffledArray;
      state.filteredProducts = [...shuffledArray];
      state.isFetched = true;
      state.allowFetch = false;
      const hightestStars = shuffledArray.filter((item) => {
        return item.rating > 4.9;
      });
      const mostDiscount = shuffledArray.filter((item) => {
        return item.discountPercentage > 19;
      });
      state.hightRecommended = [...hightestStars];
      state.mostDiscount = [...mostDiscount];
      state.isLoading = false;
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
    setIsFiltring: (state, action) => {
      state.isFiltering = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export default productsSlice;

export const productsAction = productsSlice.actions;
