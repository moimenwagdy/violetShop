import { productsDetailsActions } from "../../../Store/StoreSlices/ProductsDetailsSlice/ProductsDetailsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import RatingStarsSVG from "../../Products/RatingStarsSVG";

const RateItemStars = () => {
  const dispatch = useAppDispatch();
  const handelStarValue = (starValue: number) => {
    dispatch(productsDetailsActions.setUserRateValue(starValue));
  };
  const rating = useAppSelector((state) => state.productsDetails.userRateValue);
  return (
    <RatingStarsSVG
      additionalStyles="cursor-pointer hover:text-yellow-100"
      rating={rating}
      onClick={handelStarValue}
    />
  );
};

export default RateItemStars;
