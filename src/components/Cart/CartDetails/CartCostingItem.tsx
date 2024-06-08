const CartCostingItem: React.FC<{
  header: string;
  Numvalue?: number;
  textValue?: string;
}> = ({ header, Numvalue, textValue }) => {
  return (
    <div className="flex justify-between min-w-44 max-w-48">
      <label> {header} :</label>
      <p className="text-center">
        {Numvalue?.toFixed(2)} {textValue}
      </p>
    </div>
  );
};

export default CartCostingItem;
