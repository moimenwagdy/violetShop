const ProductStock: React.FC<{ availabilityStatus: string, stock: number, minimumOrderQuantity: number }> = ({ availabilityStatus, stock, minimumOrderQuantity }) => {
    return (
      <span id="stock">
        <p className="text-darkViolet font-extralight">Stock info:</p>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight">availability:</p>
          <p className="font-light">{availabilityStatus}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight"> stock:</p>
          <p className="font-light"> {stock}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-darkViolet font-extralight">min order quantity:</p>
          <p className="font-light"> {minimumOrderQuantity}</p>
        </span>
      </span>
    );
  };
  
  export default ProductStock;
  