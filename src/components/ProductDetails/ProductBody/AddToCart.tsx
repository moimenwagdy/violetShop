import {
  //  useEffect,
    useState } from "react";
import {
  cartSliceAction,
  // setAPICartItems,
} from "../../../Store/StoreSlices/CartSlice/CartSlice";
import {
  useAppDispatch,
  // useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import Button from "../../Button";
import { cartPayload } from "../../Cart/types";
import product from "../../Products/types/Types";
import QuantityForm from "./QuantityForm";

const AddToCart: React.FC<{ product: product }> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [showQuantityAlert, setshowQuantityAlert] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  let updatedPayloadCartItem: cartPayload;
  const payloadCartItem: cartPayload = new cartPayload(product, quantity);
  updatedPayloadCartItem = { ...payloadCartItem };
  // const userId = useAppSelector((state) => state.authorization.responseData.id);
  // const cartItems = useAppSelector((state) => state.cartSlice.cartProducts);
  function addToCart() {
    const minimumIsOk = quantity >= product.minimumOrderQuantity;
    const maximumIsOk = quantity <= product.stock;
    if (minimumIsOk && maximumIsOk) {
      dispatch(cartSliceAction.addToCart({ item: updatedPayloadCartItem }));
      setQuantity(0);
    } else {
      setshowQuantityAlert(true);
    }
  }

  // useEffect(() => {
  //   dispatch(setAPICartItems({ id: userId, cart: cartItems }));
  //   return () => {
  //     dispatch(setAPICartItems({ id: userId, cart: cartItems }));
  //   };
  // }, [cartItems.length, product]);
  return (
    <>
      <Button variants="AddItem" title="Add To Cart" onClick={addToCart} />
      <QuantityForm product={product} onChange={changeHandler} />
      {showQuantityAlert && (
        <p className="text-xs">please enter valid quantity</p>
      )}
    </>
  );
};

export default AddToCart;
