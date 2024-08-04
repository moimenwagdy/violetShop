// import ProductCard from "../Products/ProductCard";
// import product from "../Products/types/Types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCategory } from "../functions/getCategoryProducts";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { productsDetailsActions } from "../../../Store/StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";
import Product from "../../Products/Product";
import product from "../../Products/types/Types";
import ProductCard from "../../Products/ProductCard";
import { useParams } from "react-router";
import SliderButtons from "../../SliderButtons/SliderButtons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductsSuggetions: React.FC<{ category: string }> = ({ category }) => {
  const params = useParams();
  const currentProductId = params.id;
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
    isSuccess && dispatch(productsDetailsActions.BlockGetCategories());
  }, []);
  return (
    <main className="w-full flex justify-evenly items-center">
      <SliderButtons icon={faChevronLeft} x={1} id="suggestion" />
      <section
        id="suggestion"
        className="flex w-72 gap-x-1 sm:w-96 md:w-[460px] overflow-x-scroll scrollbar-none snap-x scrollbar-track-transparent scrollbar-thumb-lightestViolet">
        {data
          ?.filter((product) => {
            return product.id !== Number(currentProductId);
          })
          .map((product) => {
            return (
              <div key={product.id} className="min-w-64 snap-start">
                <ProductCard key={product.category} product={product} />
              </div>
            );
          })}
      </section>
      <SliderButtons icon={faChevronRight} x={-1} id="suggestion" />
    </main>
  );
};

export default ProductsSuggetions;
