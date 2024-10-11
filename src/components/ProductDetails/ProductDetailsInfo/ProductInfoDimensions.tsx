const ProductDimensions: React.FC<{
  dimensions: { width: number; height: number; depth?: number };
  weight: number;
}> = ({ dimensions, weight }) => {
  return (
    <span id="dimensions" className="flex flex-col justify-between gap-y-0">
      <span className="flex justify-between">
        <p className="text-darkViolet dark:font-normal font-extralight dark:text-lightestViolet">
          Dimensions:
        </p>
        <p className="font-light dark:text-white">
          {dimensions.width} * {dimensions.height} * {dimensions.depth}
        </p>
      </span>
      <span className="flex justify-between">
        <p className="text-darkViolet dark:font-normal font-extralight dark:text-lightestViolet">
          weight:
        </p>
        <p className="font-light dark:text-white">{weight}Kg</p>
      </span>
    </span>
  );
};

export default ProductDimensions;
