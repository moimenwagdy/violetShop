import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import product from "./types/Types";

const Products: React.FC<{ products: product[] }> = ({ products }) => {
  return (
    <motion.ul
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      className=" w-full flex flex-wrap justify-between gap-y-1 ">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </motion.ul>
  );
};

export default Products;
