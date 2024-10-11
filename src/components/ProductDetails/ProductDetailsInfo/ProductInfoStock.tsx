const ProductStock: React.FC<{ availabilityStatus: string, stock: number, minimumOrderQuantity: number }> = ({ availabilityStatus, stock, minimumOrderQuantity }) => {
    return (
      <span id="stock">
        <p className="text-darkViolet font-extralight dark:font-normal dark:text-lightestViolet">Stock info:</p>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight dark:font-normal dark:text-lightestViolet">availability:</p>
          <p className="font-light dark:text-white">{availabilityStatus}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight dark:font-normal dark:text-lightestViolet"> stock:</p>
          <p className="font-light dark:text-white"> {stock}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight dark:font-normal dark:text-lightestViolet">min order quantity:</p>
          <p className="font-light dark:text-white"> {minimumOrderQuantity}</p>
        </span>
      </span>
    );
  };
  
  export default ProductStock;
  