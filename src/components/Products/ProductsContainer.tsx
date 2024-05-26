import { AxiosError } from "axios";
import { Container } from "../Container/Container";
import Products from "./Products";
import product, { ProductsError } from "./types/Types";

const ProductsContainer: React.FC<{
  products: product[];
  isSuccess: boolean;
  isError: boolean;
  error: AxiosError<ProductsError>;
}> = ({ products, isError, isSuccess, error }) => {
  return (
    <>
      {isSuccess && (
        <main className="pt-10 bg-midlightViolet/10 dark:bg-gradient-to-b from-lightViolet to-darkestViolet via-darkViolet py-4 relative">
          <Container>
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
