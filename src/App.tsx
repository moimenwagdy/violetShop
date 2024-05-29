import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { queryClient } from "./utilities/QueryClient/tanStackQuery";
import { route } from "./route/routes";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
