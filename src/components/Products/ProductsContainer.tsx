import { Container } from "../Container/Container";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import Filter from "./ProductsFilter";
import Products from "./Products";

const ProductsContainer: React.FC = () => {
  const filterIsOpen = useAppSelector(
    (state) => state.productsSlice.filterIsOpen
  );
  const filteredProducts = useAppSelector(
    (state) => state.productsSlice.filteredProducts
  );

  return (
    <main className="pt-14 bg-midlightViolet/10 dark:bg-gradient-to-b dark:from-lightViolet/20 dark:to-midlightViolet/20 dark:via-similightViolet/20 py-4 relative min-h-screen">
      <Container>
        <AnimatePresence>{filterIsOpen && <Filter />}</AnimatePresence>
        <Products products={filteredProducts} />
      </Container>
    </main>
  );
};

export default ProductsContainer;
