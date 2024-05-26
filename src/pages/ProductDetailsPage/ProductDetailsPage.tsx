import ProductDetailsContainer from "../../components/ProductDetails/productDetailsContainer";
import { useParams } from "react-router";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/productsSlice/slice";
const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  dispatch(productsAction.getSelectedProduct(id));
  const selectedProduct = useAppSelector(
    (state) => state.productsSlice.selectedProduct
  );
  console.log(selectedProduct);
  return <ProductDetailsContainer product={selectedProduct!} />;
};

export default ProductDetailsPage;
