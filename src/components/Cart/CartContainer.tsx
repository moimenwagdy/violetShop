import ProductCard from "../Products/ProductCard";
import { cartPayload } from "./types";

const CartContainer: React.FC<{ cartItems: cartPayload[] }> = ({
  cartItems,
}) => {
  return (
    <span>
      {cartItems.map((e) => {
        return <ProductCard key={e.price} product={e} />;
      })}
    </span>
  );
};

export default CartContainer;
