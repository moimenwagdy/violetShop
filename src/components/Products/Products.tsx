import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Button from "../MultiStyledButton/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import getFullProducts from "./functions/getfullProducts";
import product, { ProductsError } from "./types/Types";
import { AxiosError } from "axios";
import { useEffect } from "react";
import LoadingComponent from "../Loading/Loading";

const Products: React.FC<{ products: product[] }> = ({ products }) => {
  const allowFetch = useAppSelector((state) => state.productsSlice.allowFetch);
  const dispatch = useAppDispatch();
  ///////////////////////////
  const {
    data,
    isSuccess,
    isLoading,
  }: UseQueryResult<product[], AxiosError<ProductsError>> = useQuery({
    queryKey: ["products"],
    queryFn: getFullProducts,
    enabled: allowFetch === true,
  });
  //////////////////////////////
  useEffect(() => {
    isLoading && dispatch(productsAction.setIsLoading());
    isSuccess &&
      allowFetch &&
      dispatch(productsAction.saveProducts({ products: data! }));
    isSuccess && dispatch(productsAction.dontAllowFetch());
  }, [allowFetch, dispatch, isSuccess]);

  ///////////////////////////
  //

  const isFiltering = useAppSelector(
    (state) => state.productsSlice.isFiltering
  );
  const ArrayIsNotEmpty = products.length > 1;
  //
  const offset = useAppSelector((state) => state.productsSlice.offset);
  const showUpArrow = offset > 12;
  //
  const openFilter = () => {
    dispatch(productsAction.setFilterIsOpen(true));
  };
  const showMore = () => {
    dispatch(productsAction.increaseOffsetBy(12));
  };
  const toTop = () => {
    dispatch(productsAction.increaseOffsetBy(-offset + 12));
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const resetFiler = () => {
    dispatch(productsAction.setFilterValues(""));
    dispatch(productsAction.setIsFiltring(false));
    scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <span className=" flex justify-start items-center gap-x-10 ">
        <div className="-space-x-1">
          <Button
            title="Filter"
            onClick={openFilter}
            additionalStyles="font-handWrite"
          />
          <FontAwesomeIcon
            onClick={openFilter}
            icon={faArrowDownShortWide}
            className="text-black  cursor-pointer"
          />
        </div>
        {isFiltering && (
          <Button
            title="Reset"
            variants="redButtonFree"
            onClick={resetFiler}
            additionalStyles=" text-xs"
          />
        )}
      </span>
      <motion.ul
        variants={{ hidden: { y: 1 }, visible: { y: 0 } }}
        initial="hidden"
        animate="visible"
        className={`relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 `}>
        {products &&
          ArrayIsNotEmpty &&
          products
            .filter((_, i) => i < offset)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </motion.ul>
      {!isLoading && (
        <Button
          title="Show More"
          variants="redButton"
          additionalStyles="mt-2"
          onClick={showMore}
        />
      )}
      {showUpArrow && (
        <FontAwesomeIcon
          onClick={toTop}
          className="text-subColor_4  cursor-pointer text-3xl absolute bottom-4 animate-bounce right-[2%]"
          icon={faArrowAltCircleUp}
        />
      )}
      {isLoading && <LoadingComponent />}
    </>
  );
};

export default Products;
