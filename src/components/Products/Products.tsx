import { motion } from "framer-motion";
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
  const showMore = () => {
    dispatch(productsAction.increaseOffsetBy(12));
  };
  const offset = useAppSelector((state) => state.productsSlice.offset);
  return (
    <>
      <Filter />
      <motion.ul
        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products &&
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
