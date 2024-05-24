import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../pages/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <App /> },
      { path: "products", element: <ProductsPage /> },
    ],
  },
]);
