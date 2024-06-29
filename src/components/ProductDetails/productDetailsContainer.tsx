import { Container } from "../Container/Container";
import product from "../Products/types/Types";
import Images from "./ImagesComponent/Images";
import ProductInfo from "./ProductDetailsInfo/ProductInfo";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import ProductsSuggetions from "./ProductsDetailsSuggetions/ProductsSuggetions";
import ProdcutDetailsBody from "./ProductDetailsBody/ProdcutDetailsBody";
import ProductDetailsHeader from "./ProductDetailsHeader/ProductDetailsHeader";

const productDetailsContainer: React.FC<{ product: product }> = ({
  product,
}) => {
  const lg = "flex sm:flex-row sm:gap-x-5 md:gap-x-10 sm:w-[90%]  ";
  const xs = "flex flex-col";

  return (
    <main className="mt-32">
      <Container>
        <section className="flex flex-col w-full h-full">
          <aside className={`${xs} ${lg} mx-auto sm:mx-0`}>
            <Images key={product.id} images={product.images} />
            <div className="mt-10 w-full">
              <div className="max-h-fit">
                <span className="w-full flex justify-center sm:justify-start items-start mt-4 ">
                  <ProductDetailsHeader product={product} />
                </span>
              </div>
              <ProdcutDetailsBody product={product} />
            </div>
          </aside>
          <article className="mt-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto">
            <ProductInfo product={product} />
          </article>
          <aside className="mt-4">
            <ReviewsContainer
              productID={product.id}
              reviews={product.reviews}
            />
          </aside>
          <section className="flex flex-col justify-center gap-y-4 items-center mt-32">
            <p className="text-lightViolet font-handWrite dark:text-black">
              Products You May Like
            </p>
            <ProductsSuggetions category={product.category} />
          </section>
        </section>
      </Container>
    </main>
  );
};

export default productDetailsContainer;
