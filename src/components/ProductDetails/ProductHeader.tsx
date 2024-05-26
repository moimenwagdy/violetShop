import RatingStarsSVG from "../Products/RatingStarsSVG";
import product from "../Products/types/Types";

const ProductHeader: React.FC<{ product: product }> = ({ product }) => {
  const afterDisscount =
    product.price &&
    (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  console.log(product.price);
  console.log(product.discountPercentage);
  console.log(afterDisscount);
  return (
    <div className="flex flex-col h-fit">
      <h1 className="w-full text-center sm:text-start text-2xl md:text-4xl text-lightViolet font-handWrite font-bold">
        {product.title}
      </h1>
      <span className="mx-auto sm:mx-0 flex flex-col sm:flex-row gap-x-1 ">
        <p className=" line-through text-subColor_3 ">{product.price}$</p>
        <span className="text-subColor_4">{afterDisscount!}$</span>
      </span>
      <span className="w-full flex justify-center items-center sm:justify-start  gap-x-2 mt-4">
        <p className="text-simidarkViolet">Rating</p>
        <RatingStarsSVG rating={product.rating} />
      </span>
    </div>
  );
};

export default ProductHeader;
