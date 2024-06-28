import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartPayload } from "../Types/types";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import {
  cartSliceAction,
  // setAPICartItems,
} from "../../../Store/StoreSlices/CartSlice/CartSlice";
// import { useEffect } from "react";

const CartItemHeader: React.FC<{ cartItem: cartPayload }> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  // const userId = useAppSelector((state) => state.authorization.responseData.id);
  const cartItems = useAppSelector((state) => state.cartSlice.cartProducts);
  const emptyCart = cartItems.length === 0;
  // const subQuan = cartItem.quantity < 0;
  const handleQuantity = (val: number) => {
    if (val === 1) {
      dispatch(cartSliceAction.increaseOneItemQuan({ itemID: cartItem.id }));
    } else {
      dispatch(cartSliceAction.decreaseOneItemQuan({ itemID: cartItem.id }));
    }
  };

  // useEffect(() => {
  //   dispatch(setAPICartItems({ id: userId, cart: cartItems }));
  //   subQuan && dispatch(setAPICartItems({ id: userId, cart: cartItems }));
  // }, [cartItem.quantity, cartItems.length]);

  // emptyCart && dispatch(setAPICartItems({ id: userId, cart: cartItems }));
  emptyCart && console.log("EMPTY CART");
  return (
    <header className="flex flex-col justify-center  gap-y-2 p-2">
      <h2 className="w-52 font-handWrite font-bold text-center text-middarkViolet">
        {cartItem.title}
      </h2>
      <section className="flex flex-row-reverse justify-center gap-x-8 items-center self-center sm:self-start">
        <article className="flex flex-col text-subColor_4">
          <button onClick={() => handleQuantity(1)}>
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>
          <button onClick={() => handleQuantity(-1)}>
            <FontAwesomeIcon icon={faSquareMinus} />
          </button>
        </article>
        <aside>
          <p
            className={` ${
              cartItem.quantity === 0
                ? "text-subColor_4 bg-white"
                : "text-white bg-middarkViolet "
            } w-6 rounded text-center`}>
            {cartItem.quantity}
          </p>
        </aside>
      </section>
    </header>
  );
};

export default CartItemHeader;
