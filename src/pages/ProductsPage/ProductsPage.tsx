import { useEffect } from "react";
import ProductsContainer from "../../components/Products/ProductsContainer";
import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";

const ProductsPage = () => {
  const allowFetch = useAppSelector((state) => state.productsSlice.allowFetch);
  useEffect(() => {
    console.log(allowFetch);
  });
  return <ProductsContainer />;
};

export default ProductsPage;
