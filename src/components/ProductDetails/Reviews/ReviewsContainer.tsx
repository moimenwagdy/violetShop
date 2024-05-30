import React from "react";
import Reviews from "./Reviews";
import { reviews } from "../../Products/types/Types";
import ReviewForm from "./ReviewForm";

const ReviewsContainer: React.FC<{
  reviews: reviews[];
  productID?: number;
}> = ({ reviews }) => {
  const userReviewed = reviews.length === 4;
  return (
    <aside className="w-full space-y-10 flex flex-col justify-center items-start">
      <Reviews reviews={reviews} />
      {!userReviewed ? (
        <ReviewForm />
      ) : (
        <p className="w-[70%] mx-auto">
          Thank you for Reviewing with {reviews[3]?.rating || null} stars
        </p>
      )}
    </aside>
  );
};

export default ReviewsContainer;
