const ProductDimensions: React.FC<{
  dimensions: { width: number; height: number; depth?: number };
  weight: number;
}> = ({ dimensions, weight }) => {
  return (
    <span id="dimensions" className="flex flex-col justify-between gap-y-0">
      <span className="flex justify-between">
        <p className="text-darkViolet font-extralight">Dimensions:</p>
        <p className="font-light">
          {dimensions.width} * {dimensions.height} * {dimensions.depth}
        </p>
      </span>
      <span className="flex justify-between">
        <p className="text-darkViolet font-extralight">weight:</p>
        <p className="font-light">{weight}Kg</p>
      </span>
    </span>
  );
};

export default ProductDimensions;
