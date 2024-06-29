import { useNavigate } from "react-router";
import { cartSliceAction } from "../../../Store/StoreSlices/CartSlice/CartSlice";
import { productsDetailsActions } from "../../../Store/StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { cartPayload } from "../../Cart/Types/types";
import Button from "../../MultiStyledButton/Button";
import product from "../types/Types";

const ImageAndOptions: React.FC<{ product: product }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.authorization.loggedIn);

  const navigateTo = () => {
    dispatch(productsDetailsActions.resetReviewsOffset());
    dispatch(productsDetailsActions.setUserRateValue(0));
    dispatch(productsDetailsActions.setAllowGetCategories());
    navigate(`/productDetails/${product.id}`);
  };

  let updatedPayloadCartItem: cartPayload;
  const payloadCartItem: cartPayload = new cartPayload(product, 1);
  updatedPayloadCartItem = { ...payloadCartItem };
  const addToCart = () => {
    dispatch(cartSliceAction.addToCart({ item: updatedPayloadCartItem }));
  };
  return (
    <span className="flex flex-col space-y-2">
      <img
        src={product.thumbnail}
        className="bg-productLighBG dark:bg-productLightkBG w-36 h-36 object-cover rounded-lg drop-shadow-xl shadow-xl dark:shadow-black/20  "
        alt={product.title}
      />
      <Button
        variants="redButtonFree"
        additionalStyles="text-xs dark:text-white dark:hover:text-black"
        title="add to cart"
        onClick={addToCart}
        disabled={!isLoggedIn}
      />
      <Button
        variants="redButtonFree"
        additionalStyles="text-xs dark:text-white dark:hover:text-black"
        title="view details"
        onClick={navigateTo}
      />
    </span>
  );
};

export default ImageAndOptions;
