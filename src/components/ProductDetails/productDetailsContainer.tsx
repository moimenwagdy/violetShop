import { Container } from "../Container/Container";
import product from "../Products/types/Types";
import ProdcutBody from "./ProdcutBody";
import ProductHeader from "./ProductHeader";
import Images from "./images/Images";

const productDetailsContainer: React.FC<{ product: product }> = ({
  product,
}) => {
  const lg = "flex sm:flex-row sm:gap-x-10 sm:w-[90%]";
  const xs = "flex flex-col";
  return (
    <main className="mt-32 lg:ms-32 md:ms-20">
      <Container>
        <div className={`${xs} ${lg}`}>
          <Images images={product.images} />
          <div className="mt-10">
            <div className="max-h-fit">
              <span className="w-full flex justify-center sm:justify-start items-start mt-4 ">
                <ProductHeader product={product} />
              </span>
            </div>
            <ProdcutBody product={product} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default productDetailsContainer;
