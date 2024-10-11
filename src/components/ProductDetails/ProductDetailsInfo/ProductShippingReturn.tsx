const ProductShippingReturn: React.FC<{
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
}> = ({ shippingInformation, warrantyInformation, returnPolicy }) => {
  return (
    <span id="return shipping self-end">
      <p className="text-darkViolet font-extralight text-end dark:text-white">
        {shippingInformation}
      </p>
      <p className="text-darkViolet font-extralight text-end dark:text-white" >
        {warrantyInformation}
      </p>
      <p className="text-darkViolet font-extralight text-end dark:text-white">{returnPolicy}</p>
    </span>
  );
};

export default ProductShippingReturn;
