import ProductsContainer from "../../components/Products/ProductsContainer";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productsAction } from "../../Store/productsSlice/slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { useEffect } from "react";
import { AxiosError } from "axios";
import product, { ProductsError } from "../../components/Products/types/Types";
import getFullProducts from "../../components/Products/functions/getfullProducts";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(
    (state) => state.productsSlice.filteredProducts
  );
  const {
    data,
    isSuccess,
    isError,
    error,
    isFetched,
    fetchStatus,
  }: UseQueryResult<product[], AxiosError<ProductsError>> = useQuery({
    queryKey: ["products"],
    queryFn: getFullProducts,
    staleTime: 600000,
  });

  useEffect(() => {
    if (isFetched) {
      isSuccess && console.log(isError);
      isError && console.log(isSuccess);
      fetchStatus;
      if (isSuccess) {
        dispatch(productsAction.saveProducts({ products: data }));
        dispatch(productsAction.Fetched(true));
      } else if (isError) {
        console.error("Error occurred:", error);
      }
    }
  }, [isFetched, isSuccess, isError, error]);
  isError && console.log(error.response?.data);
  return (
    <ProductsContainer
      isError={isError}
      isSuccess={isSuccess}
      products={filteredProducts}
      error={error!}
    />
  );
};

export default ProductsPage;
