import { cartSliceAction } from "../../../Store/StoreSlices/CartSlice/CartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import product from "../../Products/types/Types";
import AddToCart from "./AddToCart";

const ProdcutBody: React.FC<{ product: product }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const Cart = useAppSelector((state) => state.cartSlice.cartProducts);
  const removeFromCart = () => {
    dispatch(cartSliceAction.removeFromCart({ itemID: product.id }));
  };
  const idExsit = Cart.findIndex((item) => item.id === product.id);
  const itemExist = idExsit !== -1;
  const outOffStock = product.stock === 0;
  console.log(Cart);
  return (
    <>
      <div className="flex flex-col gap-y-2 justify-start items-start">
        <div>
          <p className="text-subColor_3/50 text-xs w-full text-center sm:text-start">
            Product Description
          </p>
          <p className="w-full lg:w-[80%] text-center sm:text-start">
            {product.description}
          </p>
        </div>
        {!outOffStock ? (
          <span className="w-full flex justify-center items-center sm:justify-end sm:items-start">
            {!itemExist ? (
              <div className="flex flex-col gap-y-2">
                <AddToCart product={product} />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-x-2">
                <p className="text-sm text-midlightViolet">
                  Item added to cart
                </p>
                <p
                  className="text-xs text-subColor_4 cursor-pointer"
                  onClick={removeFromCart}>
                  undo
                </p>
              </div>
            )}
          </span>
        ) : (
          <p className="self-end text-subColor_4 font-basic font-bold">
            Item out of stock
          </p>
        )}
      </div>
    </>
  );
};

export default ProdcutBody;
