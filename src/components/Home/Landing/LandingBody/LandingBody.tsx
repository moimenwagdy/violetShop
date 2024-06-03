import { useAppSelector } from "../../../../Store/reduxHooks.tsx/hooks";
import HomeCategoiesCards from "./HomeCategoriesShortCutCards/HomeCategoiesCards";
import SliderContainer from "./Slider/SliderContainer";

const LandingBody = () => {
  const hightRecommended = useAppSelector(
    (state) => state.productsSlice.hightRecommended
  );
  const mostDiscount = useAppSelector(
    (state) => state.productsSlice.mostDiscount
  );

  return (
    <div className=" w-full flex flex-col gap-y-20 mt-12">
      <SliderContainer
        header="Most Rated Items"
        key={hightRecommended[0]?.rating}
        items={hightRecommended}
        id="RecommendedScrollBox"
      />
      <HomeCategoiesCards />
      <SliderContainer
        header="Most Disscounts"
        key={mostDiscount[0]?.rating}
        items={mostDiscount}
        id="SaleScrollBox"
      />
    </div>
  );
};

export default LandingBody;
