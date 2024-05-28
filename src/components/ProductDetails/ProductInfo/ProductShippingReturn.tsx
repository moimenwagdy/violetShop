const ProductShippingReturn: React.FC<{
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
}> = ({ shippingInformation, warrantyInformation, returnPolicy }) => {
  return (
    <span id="return shipping self-end">
      <p className="text-darkViolet font-extralight text-end">
        {shippingInformation}
      </p>
      <p className="text-darkViolet font-extralight text-end">
        {warrantyInformation}
      </p>
      <p className="text-darkViolet font-extralight text-end">{returnPolicy}</p>
    </span>
  );
};

export default ProductShippingReturn;
