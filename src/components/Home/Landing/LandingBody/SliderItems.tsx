import { useAppSelector } from "../../../../Store/reduxHooks.tsx/hooks";
import ProductCard from "../../../Products/ProductCard";

const SliderItems = () => {
  const hightRecommended = useAppSelector(
    (state) => state.productsSlice.hightRecommended
  );

  return (
    <section
      id="RecommendedScrollBox"
      className="w-[75%] flex overflow-x-scroll snap-x mt-4 rounded-xl scrollbar-none ">
      {hightRecommended.map((item) => {
        return (
          <div key={item.id} className="min-w-60 snap-start">
            <ProductCard product={item} />
          </div>
        );
      })}
    </section>
  );
};
export default SliderItems;
