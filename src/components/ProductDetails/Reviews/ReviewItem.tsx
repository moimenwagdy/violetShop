import { motion } from "framer-motion";
import RatingStarsSVG from "../../RatingStarsComponent/RatingStarsSVG";
import { reviews } from "../../Products/types/Types";

const ReviewItem: React.FC<{
  review: reviews;
}> = ({ review }) => {
  let modefiedDate = new Date(review.date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const noRate = review.rating === 0;

  return (
    <>
      <motion.li
        variants={{
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        key={review.reviewerName}>
        <span className="flex flex-col">
          <span className="flex flex-row gap-x-4 items-center">
            <p>{review.reviewerName}</p>
            <p className="text-black/50 text-sm">{modefiedDate}</p>
          </span>
          <p className="text-xs">{review.reviewerEmail}</p>
        </span>
        <p className="text-darkestViolet font">{review.comment}</p>
        {!noRate && <RatingStarsSVG rating={review.rating} />}
      </motion.li>
    </>
  );
};

export default ReviewItem;
