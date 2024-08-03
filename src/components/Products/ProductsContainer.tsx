import { Container } from "../Container/Container";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import Filter from "./Filter";
import Products from "./Products";

const ProductsContainer: React.FC = () => {
  const filterIsOpen = useAppSelector(
    (state) => state.productsSlice.filterIsOpen
  );

  return (
    <main className="pt-14 bg-midlightViolet/70 dark:bg-gradient-to-b dark:from-lightViolet/20 dark:to-midlightViolet/20 dark:via-similightViolet/20 py-4 relative">
      <Container>
        <AnimatePresence>{filterIsOpen && <Filter />}</AnimatePresence>
        <Products />
      </Container>
    </main>
  );
};

export default ProductsContainer;
