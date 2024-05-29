import ProductsContainer from "../../components/Products/ProductsContainer";

import "../../Store/reduxHooks.tsx/hooks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/productsSlice/slice";
import product, { ProductsError } from "../../components/Products/types/Types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import getFullProducts from "../../components/Products/functions/getfullProducts";
import { AxiosError } from "axios";
import { useEffect } from "react";
const ProductsPage = () => {
  const allowFetch = useAppSelector((state) => state.productsSlice.allowFetch);
  const {
    data,
    isSuccess,
  }: UseQueryResult<product[], AxiosError<ProductsError>> = useQuery({
    queryKey: ["products"],
    queryFn: getFullProducts,
    enabled: allowFetch === true,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    isSuccess &&
      allowFetch &&
      dispatch(productsAction.saveProducts({ products: data! }));
  }, [allowFetch, dispatch, isSuccess]);

  return <ProductsContainer />;
};

export default ProductsPage;
