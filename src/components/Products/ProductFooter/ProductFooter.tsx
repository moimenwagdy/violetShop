import React from "react";

const ProductFooter: React.FC<{ description: string; price: number }> = ({
  description,
  price,
}) => {
  return (
    <footer className="bg-lightViolet/80  px-2 py-1 rounded-lg mt-2">
      <p className="text-sm text-white/50 group-hover:text-white line-clamp-2">
        {description}
      </p>
      <p className="text-right text-md font-semibold text-white">${price}</p>
    </footer>
  );
};

export default ProductFooter;
