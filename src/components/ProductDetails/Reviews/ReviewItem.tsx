import RatingStarsSVG from "../../Products/RatingStarsSVG";
import { reviews } from "../../Products/types/Types";

const ReviewItem: React.FC<{ review: reviews; index: boolean }> = ({
  review,
}) => {
  let modefiedDate = new Date(review.date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <li className="" key={review.reviewerName}>
        <span className="flex flex-col">
          <span className="flex flex-row gap-x-4 items-center">
            <p>{review.reviewerName}</p>
            <p className="text-black/50 text-sm">{modefiedDate}</p>
          </span>
          <p className="text-xs">{review.reviewerEmail}</p>
        </span>
        <p className="text-darkestViolet font">{review.comment}</p>
        <RatingStarsSVG rating={review.rating} />
      </li>
    </>
  );
};

export default ReviewItem;
