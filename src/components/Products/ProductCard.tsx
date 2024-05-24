import { motion } from "framer-motion";
import Product from "./Product";
import product from "./types/Types";

const ProductCard: React.FC<{ product: product }> = ({ product }) => {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      className="relative bg-white dark:bg-lightViolet ring-1 ring-lightestViolet dark:ring-black rounded-xl p-1  w-full sm:w-3/4 sm:mx-auto md:mx-0 md:w-[49.8%] lg:w-[24.7%]"
      key={product.id}>
      <Product product={product} />
    </motion.div>
  );
};

export default ProductCard;
