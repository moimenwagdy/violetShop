import { cartPayload } from "../types";
import CartItemOptions from "./CartItemOptions";
import RatingStarsSVG from "../../Products/RatingStarsSVG";
import CartItemHeader from "./CartItemHeader";

const CartItem: React.FC<{ product: cartPayload }> = ({ product }) => {

  return (
    <li>
      <main className="flex justify-between">
        <CartItemHeader cartItem={product} />
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs text-black">{product.priceAfterSale} $</p>
          <RatingStarsSVG rating={product.rating} />
        </div>
        <section className="py-1">
          <img
            className="w-40"
            src={product.thumbnail}
            alt={product.thumbnail}
          />
        </section>
      </main>
      <section className="flex gap-x-1 justify-evenly items-center text-xs sm:text-base">
        <CartItemOptions product={product} />
      </section>
    </li>
  );
};

export default CartItem;
