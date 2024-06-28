import { cartPayload } from "../Types/types";
import CartCostingItem from "./CartCostingItem";

const CartCosting: React.FC<{ cartItems: cartPayload[] }> = ({ cartItems }) => {
  let totalCost = 0;
  let totalPriceWithoutDiscount = 0;
  let totalDifferencePercent = 0;
  cartItems.forEach((item) => {
    totalCost += item.totalPrice;
    totalPriceWithoutDiscount += item.price! * item.quantity;
  });
  if (totalPriceWithoutDiscount > 0) {
    totalDifferencePercent =
      ((totalPriceWithoutDiscount - totalCost) / totalPriceWithoutDiscount) *
      100;
  }
  const allowFreeShipping = totalCost >= 1000;
  return (
    <section className="flex flex-col gap-y-1">
      <div>
        <h3 className="text-lg font-bold text-center"> cart info </h3>
      </div>
      <CartCostingItem header="Subtotal" Numvalue={totalPriceWithoutDiscount} />
      <CartCostingItem header="Discount" Numvalue={totalDifferencePercent} textValue="%" />
      <CartCostingItem
        header="shipping Cost"
        textValue={!allowFreeShipping ? "min - 7 $" : "Free"}
      />
      <CartCostingItem header="Taxes" Numvalue={0} />
      <CartCostingItem header="Total cost" Numvalue={totalCost} />
    </section>
  );
};

export default CartCosting;
