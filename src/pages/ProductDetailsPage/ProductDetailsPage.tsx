import ProductDetailsContainer from "../../components/ProductDetails/productDetailsContainer";
import { useParams } from "react-router";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";
import { useEffect } from "react";
const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params.id;

  dispatch(productsAction.getSelectedProduct(id));

  const selectedProduct = useAppSelector(
    (state) => state.productsSlice.selectedProduct
  );

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  return (
    <ProductDetailsContainer
      key={selectedProduct.id}
      product={selectedProduct!}
    />
  );
};

export default ProductDetailsPage;
