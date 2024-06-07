import { Container } from "../Container/Container";
import CartItems from "./CartItems";
import { cartPayload } from "./types";

const CartContainer: React.FC<{ cartItems: cartPayload[] }> = ({
  cartItems,
}) => {
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

  return (
    <Container>
      <main className="flex flex-col justify-between sm:justify-around sm:flex-row-reverse">
        <section className="mt-10">
          <CartItems cartItems={cartItems} />
        </section>
        <aside className="self-center flex flex-col justify-center  items-center">
          <div>
            <h3 className="text-lg font-bold"> cart info </h3>
          </div>
          <div className="flex gap-x-4">
            <label> Subtotal :</label>
            <p className="text-center">
              {totalPriceWithoutDiscount.toFixed(2)}
            </p>
          </div>
          <div className="flex gap-x-4">
            <label>Discount :</label>
            <p> {totalDifferencePercent.toFixed(2)} %</p>
          </div>
          <div className="flex gap-x-4">
            <label>shipping Cost :</label>
            <p>min - 7 $</p>
          </div>
          <div className="flex gap-x-4">
            <label>Taxes :</label>
            <p> 0 $</p>
          </div>
          <div className="flex gap-x-4">
            <label>Total cost :</label>
            <p> {totalCost.toFixed(2)} $</p>
          </div>
        </aside>
      </main>
    </Container>
  );
};

export default CartContainer;
