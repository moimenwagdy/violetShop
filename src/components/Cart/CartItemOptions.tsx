import { useNavigate } from "react-router";
import { cartSliceAction } from "../../Store/StoreSlices/CartSlice/CartSlice";
import { useAppDispatch } from "../../Store/reduxHooks.tsx/hooks";
import Button from "../Button";
import { cartPayload } from "./types";
import { productsDetailsActions } from "../../Store/StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";

const CartItemOptions: React.FC<{ product: cartPayload }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRemove = () => {
    dispatch(cartSliceAction.removeFromCart({ itemID: product.id }));
  };
  const goToProductDetails = () => {
    navigate(`/productDetails/${product.id}`);
    dispatch(productsDetailsActions.setAllowGetCategories());
  };
  return (
    <>
      <Button
        onClick={handleRemove}
        variants="redButtonFree"
        title="remove item"
      />
      <Button variants="redButtonFree" title="add to wishlist" />
      <Button
        onClick={goToProductDetails}
        variants="redButtonFree"
        title="product details"
      />
    </>
  );
};

export default CartItemOptions;
