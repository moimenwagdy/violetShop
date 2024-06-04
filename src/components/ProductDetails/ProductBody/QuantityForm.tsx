import product from "../../Products/types/Types";

const QuantityForm: React.FC<{
  product: product;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ product, onChange }) => {
  return (
    <span className="flex gap-x-4">
      <label className="text-sm">Quantity</label>
      <input
        onChange={(e) => onChange(e)}
        className="ps-2 placeholder:text-xs w-28 placeholder:ps-1 ring-2 ring-darkestViolet rounded-md focus-within:outline-red-600"
        type="number"
        min={product.minimumOrderQuantity}
        max={product.stock}
        placeholder={`Min Order ${product.minimumOrderQuantity}`}
      />
    </span>
  );
};

export default QuantityForm;
