import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";
import { reviews } from "../../Products/types/Types";
import ReviewItem from "./ReviewItem";

const Reviews: React.FC<{ reviews: reviews[] }> = ({ reviews }) => {
  const reviewsOFfset = useAppSelector(
    (state) => state.productsDetails.reviewsOffset
  );
  return (
    <article className="w-[70%] mx-auto">
      <span>
        <h5 className="text-lg font-handWrite text-center">Reviews</h5>
      </span>
      <ul className="flex flex-col gap-y-3">
        {reviews
          .filter((_, i) => {
            return i < reviewsOFfset;
          })
          .map((review, i) => {
            return <ReviewItem key={i} review={review} />;
          })}
      </ul>
    </article>
  );
};

export default Reviews;
