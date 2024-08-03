import HomeContainer from "../../components/Home/HomeContainer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import product, { ProductsError } from "../../components/Products/types/Types";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";
import getFullProducts from "../../components/Products/functions/getfullProducts";

const HomePage = () => {
  const allowFetch = useAppSelector((state) => state.productsSlice.allowFetch);
  const {
    data,
    isSuccess,
    isLoading,
  }: UseQueryResult<product[], AxiosError<ProductsError>> = useQuery({
    queryKey: ["products"],
    queryFn: getFullProducts,
    enabled: allowFetch === true,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    isLoading && dispatch(productsAction.setIsLoading());
    isSuccess &&
      allowFetch &&
      dispatch(productsAction.saveProducts({ products: data! }));
    isSuccess && dispatch(productsAction.dontAllowFetch());
  }, [allowFetch, dispatch, isSuccess]);
  console.log(allowFetch);
  return <HomeContainer />;
};

export default HomePage;
