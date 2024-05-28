const ProductBrand: React.FC<{ brand: string }> = ({ brand }) => {
    return (
      <span className="flex justify-between">
        <p className="text-darkViolet font-extralight">brand:</p>
        <p className="font-light">{brand}</p>
      </span>
    );
  };
  
  export default ProductBrand;
  