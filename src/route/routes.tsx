import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../pages/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  
    children: [
      { path: "home", element: <p>hiiiiiii form home</p> },
      { path: "products", element: <ProductsPage /> },
      { path: "productDetails/:id?", element: <ProductDetailsPage /> },
    ],
  },
]);
