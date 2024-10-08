import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../pages/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import HomePage from "../pages/Home/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "productDetails/:id?", element: <ProductDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactUsPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);
