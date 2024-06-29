import RatingStarsSVG from "../../RatingStarsComponent/RatingStarsSVG";

const RatingAndDisscount: React.FC<{
  rating: number;
  discountPercentage: number;
}> = ({ discountPercentage, rating }) => {
  return (
    <div className="ms-1 flex flex-col self-end">
      <RatingStarsSVG rating={rating} />
      <p className="text-xs text-red-500">-{discountPercentage} $ off</p>
    </div>
  );
};

export default RatingAndDisscount;
