import { motion } from "framer-motion";
import Product from "./Product";
import product from "./types/Types";

const ProductCard: React.FC<{ product: product }> = ({ product }) => {
  return (
    <motion.ul
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      className="dark:rounded-xl  hover:scale-[.99] 
      transition-transform 
      duration-75 relative bg-white/30 dark:bg-transparent
     rounded p-2 dark:p-1 w-full"
      key={product.id}>
      <Product product={product} />
    </motion.ul>
  );
};

export default ProductCard;
