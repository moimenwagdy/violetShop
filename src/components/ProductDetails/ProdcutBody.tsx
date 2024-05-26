import product from "../Products/types/Types";

const ProdcutBody: React.FC<{ product: product }> = ({ product }) => {
  return (
    <>
      <p className="text-subColor_3/50 text-xs w-full text-center sm:text-start">
        Product Description
      </p>
      <p className="w-full lg:w-[80%] text-center sm:text-start">
        {product.description}
      </p>
    </>
  );
};

export default ProdcutBody;
