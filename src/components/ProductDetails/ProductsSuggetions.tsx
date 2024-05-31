// import ProductCard from "../Products/ProductCard";
// import product from "../Products/types/Types";
import {
  UseBaseQueryResult,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getCategory } from "./functions/getCategoryProduct";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsDetailsActions } from "../../Store/ProductsDetailsSlice/ProductsDetailsSlice";
import { queryClient } from "../../utilities/QueryClient/tanStackQuery";
import Product from "../Products/Product";
import product from "../Products/types/Types";
import ProductCard from "../Products/ProductCard";

const ProductsSuggetions: React.FC<{ category: string }> = ({ category }) => {
  const allowToGetCategories = useAppSelector(
    (state) => state.productsDetails.isAllowToGetCategories
  );
  const dispatch = useAppDispatch();
  const { data, isSuccess }: UseQueryResult<product[]> = useQuery({
    queryKey: [Product],
    queryFn: () => getCategory(category),
    enabled: allowToGetCategories === true,
  });

  useEffect(() => {
    isSuccess && queryClient.invalidateQueries({ queryKey: [Product] });
    isSuccess && dispatch(productsDetailsActions.BlockGetCategories());
    isSuccess && console.log(data);
  }, []);
  return (
    <ul className="flex w-72 sm:w-96 md:w-[460px] overflow-x-scroll mx-auto ">
      {data?.map((product) => {
        return (
          <div className="min-w-60">
            <ProductCard product={product} />
          </div>
        );
      })}
    </ul>
  );
};

export default ProductsSuggetions;
