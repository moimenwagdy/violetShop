import product from "../Products/types/Types";
import AddToCart from "./AddToCart";

const ProdcutBody: React.FC<{ product: product }> = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-2 justify-start items-start">
      <div>
        <p className="text-subColor_3/50 text-xs w-full text-center sm:text-start">
          Product Description
        </p>
        <p className="w-full lg:w-[80%] text-center sm:text-start">
          {product.description}
        </p>
      </div>
      <span className="w-full flex justify-center items-center sm:justify-end sm:items-start">
        <AddToCart productID={product.id} />
      </span>
    </div>
  );
};

export default ProdcutBody;
