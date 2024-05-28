import { Container } from "../Container/Container";
import product from "../Products/types/Types";
import ProdcutBody from "./ProductBody/ProdcutBody";
import ProductHeader from "./ProductHeader/ProductHeader";
import Images from "./ImagesComponent/Images";
import ProductInfo from "./ProductInfo/ProductInfo";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import { useEffect } from "react";

const productDetailsContainer: React.FC<{ product: product }> = ({
  product,
}) => {
  const lg = "flex sm:flex-row sm:gap-x-5 md:gap-x-10 sm:w-[90%]  ";
  const xs = "flex flex-col";

  const reviews = useAppSelector((state) => state.productsSlice.updatedReviews);
  useEffect(() => {
    console.log(reviews);
  });
  return (
    <main className="mt-32">
      <Container>
        <section className="flex flex-col w-full h-full">
          <aside className={`${xs} ${lg} mx-auto sm:mx-0`}>
            <Images images={product?.images} />
            <div className="mt-10 w-full">
              <div className="max-h-fit">
                <span className="w-full flex justify-center sm:justify-start items-start mt-4 ">
                  <ProductHeader product={product} />
                </span>
              </div>
              <ProdcutBody product={product} />
            </div>
          </aside>
          <article className="mt-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto">
            <ProductInfo product={product} />
          </article>
          <section className="mt-4">
            <ReviewsContainer reviews={reviews} />
          </section>
        </section>
      </Container>
    </main>
  );
};

export default productDetailsContainer;
