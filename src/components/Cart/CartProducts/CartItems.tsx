import CartItem from "./CartItem";
import { cartPayload } from "../Types/types";

const CartItems: React.FC<{ cartItems: cartPayload[] }> = ({ cartItems }) => {
  
  return (
    <ul className="space-y-3">
      {cartItems.map((item) => {
        return <CartItem product={item} />;
      })}
    </ul>
  );
};

export default CartItems;
