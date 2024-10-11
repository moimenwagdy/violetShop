const ProductBrand: React.FC<{ brand: string }> = ({ brand }) => {
    return (
      <span className="flex justify-between">
        <p className="text-darkViolet dark:text-lightestViolet font-extralight dark:font-normal">brand:</p>
        <p className="font-light dark:text-white">{brand}</p>
      </span>
    );
  };
  
  export default ProductBrand;  
  