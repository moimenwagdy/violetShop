import { productsDetailsActions } from "../../../Store/ProductsDetailsSlice/ProductsDetailsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import Button from "../../Button";
import { reviews } from "../../Products/types/Types";
import ReviewItem from "./ReviewItem";

const Reviews: React.FC<{ reviews: reviews[] }> = ({ reviews }) => {
  const dispatch = useAppDispatch();
  const reviewsOffset = useAppSelector(
    (state) => state.productsDetails.reviewsOffset
  );
  const userReviewed = reviews.length === 4;
  const allReviewsShown =
    (userReviewed && reviewsOffset === 4) ||
    (!userReviewed && reviewsOffset === 3);
  const moreReviews = () => {
    dispatch(productsDetailsActions.setReviewsOffset());
    allReviewsShown && dispatch(productsDetailsActions.resetReviewsOffset());
  };
  return (
    <article className="w-[70%] mx-auto">
      <span>
        <h5 className="text-lg font-handWrite text-center bg-gradient-to-r from-slate-300 to-white">
          Reviews
        </h5>
      </span>
      <ul className="flex flex-col gap-y-3 ">
        {reviews
          .filter((_, i) => {
            return i < reviewsOffset;
          })
          .map((review, i, arr) => {
            const isLastItem = i === arr.length - 1;
            return <ReviewItem key={i} index={isLastItem} review={review} />;
          })}
        <span className="flex justify-center">
          <Button
            title={`${allReviewsShown ? "Hide Reviews" : "More Reviews"} `}
            variants="redButtonFree"
            onClick={moreReviews}
          />
        </span>
      </ul>
    </article>
  );
};

export default Reviews;
