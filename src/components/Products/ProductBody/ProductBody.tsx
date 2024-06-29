import product from "../types/Types";
import ImageAndOptions from "./ImageAndOptions";
import RatingAndDisscount from "./RatingAndDisscount";

const ProductBody: React.FC<{ product: product }> = ({ product }) => {
  return (
    <div className="flex flex-col justify-between flex-1 ">
      <div className="flex justify-center gap-x-2">
        <RatingAndDisscount
          discountPercentage={product.discountPercentage}
          rating={product.rating}
        />
        <ImageAndOptions product={product} />
      </div>
    </div>
  );
};

export default ProductBody;
