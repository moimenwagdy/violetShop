import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartPayload } from "./types";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../Store/reduxHooks.tsx/hooks";
import { cartSliceAction } from "../../Store/StoreSlices/CartSlice/CartSlice";

const CartItemHeader: React.FC<{ cartItem: cartPayload }> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (val: number) => {
    if (val === 1) {
      dispatch(cartSliceAction.increaseOneItemQuan({ itemID: cartItem.id }));
    } else
      dispatch(cartSliceAction.decreaseOneItemQuan({ itemID: cartItem.id }));
  };
  return (
    <header className="flex flex-col justify-center gap-y-2 p-2">
      <h2 className="w-52 font-handWrite font-bold text-middarkViolet">
        {cartItem.title}
      </h2>
      <section className="flex justify-center gap-x-8 items-center self-start">
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
