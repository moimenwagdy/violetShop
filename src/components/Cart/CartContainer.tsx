import { Container } from "../Container/Container";
import CartItems from "./CartProducts/CartItems";
import { cartPayload } from "./types";
import CartCosting from "./CartDetails/CartCostingItems";
import CartCostingOptions from "./CartDetails/CartCostingOptions";
import Button from "../Button";

const CartContainer: React.FC<{ cartItems: cartPayload[] }> = ({
  cartItems,
}) => {
  let totalCost = 0;
  cartItems.forEach((item) => {
    totalCost += item.totalPrice;
  });

  return (
    <Container>
      <main className="flex flex-col justify-between sm:justify-around sm:flex-row-reverse min-w-48">
        <section className="mt-10">
          <CartItems cartItems={cartItems} />
        </section>
        <aside className="self-start mt-10 gap-y-10 flex flex-col justify-center items-center">
          <CartCostingOptions totalCost={totalCost} />
          <CartCosting cartItems={cartItems} />
          <Button title="Check Out" variants="basic" additionalStyles="" />
        </aside>
      </main>
    </Container>
  );
};

export default CartContainer;
