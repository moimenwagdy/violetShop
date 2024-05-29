import React, { useState } from "react";
import { productsDetailsActions } from "../../../Store/ProductsDetailsSlice/ProductsDetailsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import Button from "../../Button";
import Reviews from "./Reviews";
import { reviews } from "../../Products/types/Types";
import { productsAction } from "../../../Store/productsSlice/slice";
import { NavFormInput } from "../../Navbar/Menu/NavForm/NavFormInput";

const ReviewsContainer: React.FC<{
  reviews: reviews[];
  productID: number;
}> = ({ reviews, productID }) => {
  const [comment, setComment] = useState<string>("");
  const ReviewsOffset = useAppSelector(
    (state) => state.productsDetails.reviewsOffset
  );
  const userReviewed = reviews.length === 4;
  const allReviewsShown = ReviewsOffset === 4;
  const dispatch = useAppDispatch();
  const moreReviews = () => {
    dispatch(productsDetailsActions.setReviewsOffset());
    allReviewsShown && dispatch(productsDetailsActions.resetReviewsOffset());
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  console.log(ReviewsOffset);
  const addReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview: reviews = {
      comment: comment,
      rating: 5,
      reviewerEmail: "UserEmail" || "example@example.com",
      reviewerName: "userName" || "John Doe",
      date: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    comment &&
      dispatch(
        productsAction.updateReview({
          reviews: newReview,
          productID: productID,
        })
      );
  };

  return (
    <aside className="w-full space-y-6">
      <Reviews reviews={reviews} />
      <span className="flex justify-center">
        <Button
          title={`${
            userReviewed && allReviewsShown ? "Hide Reviews" : "More Reviews"
          } `}
          variants="redButtonFree"
          onClick={moreReviews}
        />
      </span>
      {!userReviewed ? (
        <form onSubmit={addReview}>
          <NavFormInput
            onChange={handleChange}
            type="text"
            id={""}
            title={"Add Review"}
            name={""}
          />
          <Button title="add review" variants="redButtonFree" />
        </form>
      ) : (
        <p>You Rviwed this item</p>
      )}
    </aside>
  );
};

export default ReviewsContainer;
