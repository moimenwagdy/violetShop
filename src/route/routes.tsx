import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../pages/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import HomePage from "../pages/Home/HomePage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "productDetails/:id?", element: <ProductDetailsPage /> },
    ],
  },
]);
