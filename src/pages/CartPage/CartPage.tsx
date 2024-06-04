import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import CartContainer from "../../components/Cart/CartContainer";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cartSlice.cartProducts);
  return <CartContainer cartItems={cartItems!} />;
};

export default CartPage;
