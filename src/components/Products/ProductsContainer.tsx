import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productsAction } from "../../Store/productsSlice/slice";
import { useAppDispatch } from "../../Store/reduxHooks.tsx/hooks";
import getFullProducts from "./functions/getfullProducts";
import product from "./types/Types";
import { useEffect } from "react";
import { Container } from "../container/Container";
import Products from "./Products";

const ProductsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, error, isSuccess, isError }: UseQueryResult<product[]> =
    useQuery({
      queryKey: ["products"],
      queryFn: getFullProducts,
      staleTime: 600000,
    });
  useEffect(() => {
    if (isSuccess) {
      dispatch(productsAction.saveProducts({ products: data }));
      dispatch(productsAction.Fetched(true));
    }
  }, [isSuccess]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <main className="bg-lightestViolet/40 dark:bg-darkViolet  py-4">
        <Container>
          <Products products={data!} />
        </Container>
      </main>
    </>
  );
};

export default ProductsContainer;
