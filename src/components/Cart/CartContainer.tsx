import { Container } from "../Container/Container";
import CartItems from "./CartProducts/CartItems";
import { cartPayload } from "./Types/types";
import CartCosting from "./CartDetails/CartCostingItems";
import CartCostingOptions from "./CartDetails/CartCostingOptions";
import Button from "../MultiStyledButton/Button";
import {
  useAppDispatch,
  // useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { siteMapSliceAction } from "../../Store/StoreSlices/siteMapSlice/siteMapSlice";
// import { useEffect } from "react";
// import { getAPICartItems } from "../../Store/StoreSlices/CartSlice/CartSlice";

const CartContainer: React.FC<{ cartItems: cartPayload[] }> = ({
  cartItems,
}) => {
  let totalCost = 0;
  cartItems.forEach((item) => {
    totalCost += item.totalPrice;
  });
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.authorization.loggedIn);
  const cartHasItems = cartItems.length !== 0;
  const openAuthForm = () => {
    dispatch(siteMapSliceAction.openMap());
  };
  return (
    <Container>
      <main className="flex flex-col justify-between sm:justify-around sm:flex-row-reverse min-w-48">
        {loggedIn ? (
          <>
            <section className="mt-10 shrink">
              {cartHasItems && <CartItems cartItems={cartItems} />}
              {!cartHasItems && (
                <span className="mt-40 text-center text-middarkViolet flex justify-center items-end gap-x-6">
                  <h1 className="text-2xl font-bold  ">Your Cart Is Empty</h1>
                </span>
              )}
            </section>
            <aside className="self-center sm:self-start mt-10 gap-y-10 flex flex-col justify-center items-center">
              <CartCostingOptions totalCost={totalCost} />
              <CartCosting cartItems={cartItems} />
              <Button title="Check Out" variants="basic" additionalStyles="" />
            </aside>
          </>
        ) : (
          <span className="mt-40 text-center text-middarkViolet flex justify-center items-end gap-x-6">
            <h1 className="text-2xl font-bold  ">
              to manage cart you should{" "}
              <span
                className="hover:text-subColor_4 cursor-pointer"
                onClick={openAuthForm}>
                login
              </span>
            </h1>
            <span className="text-7xl">!</span>
          </span>
        )}
      </main>
    </Container>
  );
};
export default CartContainer;
