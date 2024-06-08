import React from "react";
import Reviews from "./Reviews";
import { reviews } from "../../Products/types/Types";
import ReviewForm from "./ReviewForm";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";

const ReviewsContainer: React.FC<{
  reviews: reviews[];
  productID?: number;
}> = ({ reviews }) => {
  const userReviewed = reviews.length === 4;
  const loggedIn = useAppSelector((state) => state.authorization.loggedIn);
  return (
    <aside className="w-full  space-y-10 flex flex-col justify-center items-start">
      <Reviews reviews={reviews} />
      {!userReviewed && loggedIn && <ReviewForm />}
      {!loggedIn && (
        <p className="text-xs text-subColor_4 mx-auto">login to add review</p>
      )}
      <AnimatePresence>
        {userReviewed && (
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            className="w-[70%] mx-auto h-full text-sm">
            You Reviewed This Item
          </motion.p>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default ReviewsContainer;
