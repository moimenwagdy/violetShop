import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productsAction } from "../../Store/productsSlice/slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import getFullProducts from "./functions/getfullProducts";
import product from "./types/Types";
import { useEffect } from "react";
import { Container } from "../Container/Container";
import Products from "./Products";

const ProductsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(
    (state) => state.productsSlice.filteredProducts
  );
  const { data, isSuccess }: UseQueryResult<product[]> = useQuery({
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

  return (
    <>
      <main className="bg-midlightViolet/10 dark:bg-middarkViolet py-4 relative">
        <Container>
          <Products products={filteredProducts} />
        </Container>
      </main>
    </>
  );
};

export default ProductsContainer;
