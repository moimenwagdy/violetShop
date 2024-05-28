import Button from "../../Button";

const AddToCart: React.FC<{ productID: number }> = ({ productID }) => {
  function addToCart() {
    console.log(productID);
  }
  return <Button variants="AddItem" title="Add To Cart" onClick={addToCart} />;
};

export default AddToCart;
