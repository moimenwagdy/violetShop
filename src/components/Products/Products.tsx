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
  return (
    <>
      <AnimatePresence>{filterIsOpen && <Filter />}</AnimatePresence>
      <Button
        title="Filter"
        onClick={openFilter}
        additionalStyles="font-handWrite"
      />
      <motion.ul
        variants={{ hidden: { y: 1 }, visible: { y: 0 } }}
        initial="hidden"
        animate="visible"
        className={` w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`}>
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
    </>
  );
};

export default Products;
