import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const CartShortcut = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const navigate = useNavigate();

  const cartItemsLength = useAppSelector(
    (state) => state.cartSlice.cartProducts.length
  );
  const goToCart = () => {
    navigate("/cart");
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ChangeCartShortCutPosition = scrollY > 80;
  return (
    <div
      onClick={goToCart}
      className={`cursor-pointer dark:bg-zinc-300 dark:p-1 dark:rounded-lg me-2 ${
        ChangeCartShortCutPosition ? "top-8" : "top-32"
      } fixed sm:absolute sm:top-32 flex justify-center items-center space-x-2 `}>
      <FontAwesomeIcon
        className="text-3xl text-darkViolet "
        icon={faCartFlatbed}
      />
      <p className="font-handWrite text-xl text-darkViolet ">
        {cartItemsLength}
      </p>
    </div>
  );
};

export default CartShortcut;
