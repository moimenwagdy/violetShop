import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import SliderContainer from "../Home/Landing/LandingBody/Slider/SliderContainer";

const TopSearched = () => {
  const mostSearched = useAppSelector(
    (state) => state.productsSlice.mostSearched
  );
  return (
    <div className="w-full mt-auto">
      <SliderContainer
        header="Top searched"
        items={mostSearched}
        id="searchPage"
      />
    </div>
  );
};

export default TopSearched;
