import { motion } from "framer-motion";
import product from "./types/Types";
import ProductBody from "./ProductBody/ProductBody";
import ProductFooter from "./ProductFooter/ProductFooter";

const Product: React.FC<{ product: product }> = ({ product }) => {
  return (
    <motion.li
      variants={{ visible: { opacity: 1, scale: 1 } }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate="visible"
      className="dark:rounded-lg group flex flex-col justify-between h-full p-2 bg-white shadow-md dark:bg-gradient-to-t  dark:from-darkViolet dark:via-simidarkViolet dark:to-darkViolet">
      <header className="w-full min-h-12">
        <h2 className="text-simidarkViolet dark:text-white text-md font-handWrite font-bold text-center ">
          {product.title}
        </h2>
      </header>
      <ProductBody product={product} />
      <ProductFooter description={product.description} price={product.price!} />
    </motion.li>
  );
};

export default Product;
