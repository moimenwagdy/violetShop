import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const CartShortcut = () => {
  const navigate = useNavigate();
  const cartItemsLength = useAppSelector(
    (state) => state.cartSlice.cartProducts.length
  );
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <div
      onClick={goToCart}
      className="cursor-pointer absolute -bottom-14 flex justify-center items-center space-x-2">
      <FontAwesomeIcon
        className="text-3xl text-darkViolet"
        icon={faCartFlatbed}
      />
      <p className="font-handWrite text-xl">{cartItemsLength}</p>
    </div>
  );
};

export default CartShortcut;
