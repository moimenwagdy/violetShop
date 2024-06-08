const CartCostingOptions: React.FC<{ totalCost: number }> = ({ totalCost }) => {
  const allowFreeShipping = totalCost >= 1000;
  return (
    <section className="min-h-20 max-w-48 mt-4 flex gap-y-1 flex-col justify-center items-center">
      {
        <span
          className={`bg-middarkViolet px-2 py-1 ${
            !allowFreeShipping ? "grayscale" : "grayscale-0 text-white"
          }`}>
          Free Shipping
        </span>
      }
      {!allowFreeShipping && (
        <p className=" text-xs max-w-44 text-center">
          get free shipping when you buy with total cost more than 1000 $
        </p>
      )}
    </section>
  );
};

export default CartCostingOptions;
