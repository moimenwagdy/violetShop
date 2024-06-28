import { useNavigate } from "react-router";
import {
  cartSliceAction,
  // setAPICartItems,
} from "../../../Store/StoreSlices/CartSlice/CartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import Button from "../../MultiStyledButton/Button";
import { cartPayload } from "../Types/types";
import { productsDetailsActions } from "../../../Store/StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";

const CartItemOptions: React.FC<{ product: cartPayload }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const userId = useAppSelector((state) => state.authorization.responseData.id);
  const cartItems = useAppSelector((state) => state.cartSlice.cartProducts);
  const handleRemove = () => {
    dispatch(cartSliceAction.removeFromCart({ itemID: product.id }));
    console.log(product);
    console.log(cartItems);
    // dispatch(setAPICartItems({ id: userId, cart: cartItems }));
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
