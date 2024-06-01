import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { reviews } from "../../Products/types/Types";
import { productsAction } from "../../../Store/productsSlice/slice";
import { NavFormInput } from "../../Navbar/Menu/NavForm/NavFormInput";
import Button from "../../Button";
import RateItemStars from "./RateItemStars";

const ReviewForm = () => {
  const [comment, setComment] = useState<string>("");
  const [submittedWithoutReview, setSubmittedWithoutReview] =
    useState<boolean>(false);

  const productID = useAppSelector(
    (state) => state.productsSlice.selectedProduct.id
  );
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    e.target.value !== "" && setSubmittedWithoutReview(false);
  };
  const userRate = useAppSelector(
    (state) => state.productsDetails.userRateValue
  );
  const currentDade = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const addReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview: reviews = {
      comment: comment,
      rating: userRate,
      reviewerEmail: "UserEmail" || "example@example.com",
      reviewerName: "userName" || "John Doe",
      date: currentDade,
    };
    comment
      ? dispatch(
          productsAction.updateReview({
            reviews: newReview,
            productID: productID,
          })
        )
      : setSubmittedWithoutReview(true);
  };
  return (
    <form
    
      className="w-full sm:w-[70%] mx-auto flex flex-col gap-y-2 justify-center items-center"
      onSubmit={addReview}>
      <span className="-mb-4">
        <RateItemStars />
        {userRate === 0 && <p className="text-xs">rate this item</p>}
      </span>
      <NavFormInput
        onChange={handleChange}
        type="text"
        id={""}
        title={"Add Review"}
        name={""}
        additionalStyles="w-[90%] sm:w-[70%] md:w-[50%]"
        placeHolder={!comment ? "type your review" : ""}
      />
      <Button
        title={submittedWithoutReview ? "Empty Review" : "Submit"}
        variants="redButtonFree"
      />
    </form>
  );
};

export default ReviewForm;
