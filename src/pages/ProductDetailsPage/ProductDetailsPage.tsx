import ProductDetailsContainer from "../../components/ProductDetails/productDetailsContainer";
import { useParams } from "react-router";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/productsSlice/slice";
import { useEffect } from "react";
const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(
    (state) => state.productsSlice.selectedProduct
  );

  useEffect(() => {
    dispatch(productsAction.getSelectedProduct(id));
    scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <ProductDetailsContainer
      key={selectedProduct.id}
      product={selectedProduct!}
    />
  );
};

export default ProductDetailsPage;
