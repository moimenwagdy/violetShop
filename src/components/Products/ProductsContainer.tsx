import { AxiosError } from "axios";
import { Container } from "../Container/Container";
import Products from "./Products";
import product, { ProductsError } from "./types/Types";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import Filter from "./Filter";

const ProductsContainer: React.FC<{
  products: product[];
  isSuccess: boolean;
  isError: boolean;
  error: AxiosError<ProductsError>;
}> = ({ products, isError, isSuccess, error }) => {
  const filterIsOpen = useAppSelector(
    (state) => state.productsSlice.filterIsOpen
  );

  return (
    <>
      {isSuccess && (
        <main className="pt-10 bg-midlightViolet/10 dark:bg-gradient-to-b dark:from-lightViolet/20 dark:to-midlightViolet/20 dark:via-similightViolet/20 py-4 relative">
          <Container>
            <AnimatePresence>{filterIsOpen && <Filter />}</AnimatePresence>
            <Products products={products} />
          </Container>
        </main>
      )}
      {isError && (
        <p className="text-black text-2xl">{error.response?.data?.message}</p>
      )}
    </>
  );
};

export default ProductsContainer;
