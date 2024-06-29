import product from "../../Products/types/Types";
import ProductBrand from "./ProductInfoBrand";
import ProductDimensions from "./ProductInfoDimensions";
import ProductHeader from "./ProductInfoHeader";
import ProductStock from "./ProductInfoStock";
import ProductShippingReturn from "./ProductShippingReturn";

const ProductInfo: React.FC<{ product: product }> = ({ product }) => {
  return (
    <div className="w-full mx-auto flex flex-col gap-y-4">
      <ProductHeader />
      {product.brand && <ProductBrand brand={product.brand} />}
      <ProductDimensions
        dimensions={product.dimensions}
        weight={product.weight}
      />
      <ProductStock
        availabilityStatus={product.availabilityStatus}
        stock={product.stock}
        minimumOrderQuantity={product.minimumOrderQuantity}
      />
      <ProductShippingReturn
        shippingInformation={product.shippingInformation}
        warrantyInformation={product.warrantyInformation}
        returnPolicy={product.returnPolicy}
      />
      <ul className="flex gap-x-2 self-center">
        {product.tags.map((tag) => (
          <li key={tag}>
            <p>#{tag}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
