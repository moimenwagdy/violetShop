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
    isSuccess && localStorage.setItem("lklk"[1], JSON.stringify(data));
  }, [allowFetch, dispatch, isSuccess]);
  return <HomeContainer />;
};

export default HomePage;
