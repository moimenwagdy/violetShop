import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import product from "./types/Types";
import Button from "../Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/productsSlice/slice";
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";

const Products: React.FC<{ products: product[] }> = ({ products }) => {
  const dispatch = useAppDispatch();
  const filterIsOpen = useAppSelector(
    (state) => state.productsSlice.filterIsOpen
  );

  const showMore = () => {
    dispatch(productsAction.increaseOffsetBy(12));
  };
  const offset = useAppSelector((state) => state.productsSlice.offset);
  const openFilter = () => {
    dispatch(productsAction.setFilterIsOpen(true));
  };
  const toTop = () => {
    dispatch(productsAction.increaseOffsetBy(-offset + 12));
    scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <AnimatePresence>{filterIsOpen && <Filter />}</AnimatePresence>
      <span className="-space-x-1 flex justify-start items-center">
        <Button
          title="Filter"
          onClick={openFilter}
          additionalStyles="font-handWrite dark:text-white"
        />
        <FontAwesomeIcon
          onClick={openFilter}
          icon={faArrowDownShortWide}
          className="text-black dark:text-white cursor-pointer"
        />
      </span>
      <motion.ul
        variants={{ hidden: { y: 1 }, visible: { y: 0 } }}
        initial="hidden"
        animate="visible"
        className={`relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`}>
        {products[0].price !== 0 &&
          products
            .filter((_, i) => i < offset)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </motion.ul>
      <Button
        title="Show More"
        variants="redButton"
        additionalStyles="mt-2"
        onClick={showMore}
      />
      {offset > 12 && (
        <FontAwesomeIcon
          onClick={toTop}
          className="text-subColor_4 dark:text-white cursor-pointer text-3xl absolute bottom-4 animate-bounce right-[2%]"
          icon={faArrowAltCircleUp}
        />
      )}
    </>
  );
};

export default Products;
