import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/reduxStore.tsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./route/routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { querClient } from "./utilities/QueryClient/tanStackQuery.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={querClient}>
      <RouterProvider router={route}></RouterProvider>
    </QueryClientProvider>
  </Provider>
);
